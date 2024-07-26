import { OctokitResponse } from "@octokit/types";
import { octokitConfig, repoUrl } from "../../config";

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

export const createBranch = async (branchName: string) => {
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
