"use server";

import { SubmitJobResource } from "@/lib/types/job-resource-types";
import zod from "zod";
import crypto from "crypto";
import { octokitConfig, repoUrl } from "../config";
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
  const newBranchResponse: OctokitResponse<BranchRefResponse> =
    await octokit.request(`POST ${repoUrl}/git/refs`, {
      ref: `refs/heads/${branchName}`,
      sha: `${mainBranchRefSha}`,
    });
  return newBranchResponse.data.object.sha;
};

export const addResource = async (
  data: zod.infer<typeof SubmitJobResource>
) => {
  const branchName = makeBranchNane();
  const branchSha = await createBranch(branchName);
};
