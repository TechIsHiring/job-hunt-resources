import { Octokit } from "@octokit/core";
import { exponentialBackOff } from "../util/exponential-back-off";

const customFetchWrapper = async (...args: Parameters<typeof fetch>) => {
  return await exponentialBackOff(fetch)(...args);
};

export const octokitConfig = new Octokit({
  auth: process.env.GITHUB_PAT,
  request: { fetch: customFetchWrapper },
});

export const repoUrl = "/repos/TechIsHiring/job-search-resource-data";

export const datasourceLocation = "/resources-data/data.json";
