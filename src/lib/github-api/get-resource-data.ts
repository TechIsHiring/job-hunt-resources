import { Octokit } from "@octokit/core";
import { ResourceData } from "../types/job-resource-types";

export const getResourceData = async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_PAT });

  const githubResponse = await octokit.request(
    "GET /repos/TechIsHiring/job-search-resource-data/contents/resources-data/data.json"
  );

  const resourceData: ResourceData = JSON.parse(
    atob(githubResponse.data.content)
  );

  return resourceData;
};
