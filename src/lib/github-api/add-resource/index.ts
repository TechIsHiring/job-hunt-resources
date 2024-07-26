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

interface commitResponse {
  content: {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: string;
    _links: {
      self: string;
      git: string;
      html: string;
    };
  };
  commit: {
    sha: string;
    node_id: string;
    url: string;
    html_url: string;
    author: {
      date: string;
      name: string;
      email: string;
    };
    committer: {
      date: string;
      name: string;
      email: string;
    };
    message: string;
    tree: {
      url: string;
      sha: string;
    };
    parents: [
      {
        url: string;
        html_url: string;
        sha: string;
      }
    ];
    verification: {
      verified: boolean;
      reason: string;
      signature: null;
      payload: null;
    };
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

  const newBranchResponse: OctokitResponse<BranchRefResponse> =
    await octokit.request(`POST ${repoUrl}/git/refs`, {
      ref: `refs/heads/${branchName}`,
      sha: `${mainBranchRefSha}`,
    });

  return newBranchResponse.data.object.sha;
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

const createCommitInNewBranch = async (
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

  const commitData: OctokitResponse<commitResponse> = await octokit.request(
    `PUT ${repoUrl}/contents/${datasourceLocation}`,
    octoRequestBody
  );

  return commitData.data.commit.sha;
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
  const branchSha = await createBranch(branchName);
  const commmitSha = await createCommitInNewBranch(
    branchName,
    currentData,
    formData,
    fileSha
  );
  await createPullRequestFromNewBranchToMain(
    branchName,
    formData.submitted_by,
    formData.name
  );
};
