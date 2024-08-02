import { Octokit } from "@octokit/core";
import { exponentialBackOff } from "../util/exponential-back-off";

const customFetchWrapper = async (...args: Parameters<typeof fetch>) => {
  return await exponentialBackOff(fetch)(...args);
};

export const octokitConfig = new Octokit({
  auth: process.env.GITHUB_PAT,
  request: { fetch: customFetchWrapper },
});

export const repoUrl = process.env.GITHUB_REPO_ADDRESS;

export const datasourceLocation = process.env.GITHUB_REPO_DATA_LOCATION;
