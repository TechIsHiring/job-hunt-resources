"use server";

import {
  ResourceData,
  SubmitJobResource,
} from "@/lib/types/job-resource-types";
import crypto from "crypto";
import { datasourceLocation, octokitConfig, repoUrl } from "../config";
import { OctokitResponse } from "@octokit/types";

interface BranchRefResponse {
  ref: string;
  node_id: string;
  url: string;
  object: {
    type: string;
    sha: string;
    url: string;
  };
}

const makeBranchNane = () => {
  const result = crypto.randomUUID();
  result.replace("-", "");
  return result;
};

const createBranch = async (branchName: string) => {
  const octokit = octokitConfig;

  const mainBranchRefObject: OctokitResponse<BranchRefResponse[]> =
    await octokit.request(`GET ${repoUrl}/git/ref/heads/main`);
  const mainBranchRefSha = mainBranchRefObject.data[0].object.sha;

  const octoRequestBody = {
    ref: `refs/heads/${branchName}`,
    sha: `${mainBranchRefSha}`,
  };

  await octokit.request(`POST ${repoUrl}/git/refs`, octoRequestBody);
};

const prepareCommitData = (
  currentData: ResourceData,
  formData: SubmitJobResource
) => {
  const tempDataStore: ResourceData = JSON.parse(JSON.stringify(currentData));
  const { category, ...rest } = formData;
  const dataToInsert = rest;

  tempDataStore[category].push(dataToInsert);
  const dataForCommitRequest = Buffer.from(
    JSON.stringify(tempDataStore)
  ).toString("base64");
  return dataForCommitRequest;
};

const updateDataStoreInNewBranch = async (
  branchName: string,
  currentData: ResourceData,
  formData: SubmitJobResource,
  fileSha: string
) => {
  const dataForCommitRequest = prepareCommitData(currentData, formData);
  const octokit = octokitConfig;

  const octoRequestBody = {
    content: dataForCommitRequest,
    message: `${formData.submitted_by}'s addition request for ${formData.name}`,
    branch: branchName,
    sha: fileSha,
  };

  await octokit.request(
    `PUT ${repoUrl}/contents${datasourceLocation}`,
    octoRequestBody
  );
};

const createPullRequestFromNewBranchToMain = async (
  branchName: string,
  submittorName: string,
  resourceName: string
) => {
  const octokit = octokitConfig;

  const octoRequestBody = {
    head: branchName,
    base: "main",
    title: `${submittorName}'s addition request for ${resourceName}`,
    body: `${submittorName} has requested that add '${resourceName}' to the list of job search resources.`,
  };

  await octokit.request(`POST ${repoUrl}/pulls`, octoRequestBody);
};

export const addResource = async (
  currentData: ResourceData,
  formData: SubmitJobResource,
  fileSha: string
) => {
  const branchName = makeBranchNane();
  await createBranch(branchName);
  await updateDataStoreInNewBranch(branchName, currentData, formData, fileSha);
  await createPullRequestFromNewBranchToMain(
    branchName,
    formData.submitted_by,
    formData.name
  );
};
