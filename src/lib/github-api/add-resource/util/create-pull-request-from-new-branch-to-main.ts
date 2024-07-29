import { octokitConfig, repoUrl } from "../../config";

export const createPullRequestFromNewBranchToMain = async (
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
