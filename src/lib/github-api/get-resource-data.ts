import { ResourceData } from "../types/job-resource-types";
import { octokitConfig } from "./config";

export const getResourceData = async () => {
  const octokit = octokitConfig;

  const githubResponse = await octokit.request(
    "GET /repos/TechIsHiring/job-search-resource-data/contents/resources-data/data.json"
  );

  const resourceData: ResourceData = JSON.parse(
    atob(githubResponse.data.content)
  );

  return resourceData;
};
