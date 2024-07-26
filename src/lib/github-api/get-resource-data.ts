"use server";

import { ResourceData } from "../types/job-resource-types";
import { datasourceLocation, octokitConfig, repoUrl } from "./config";

export const getResourceData = async () => {
  const octokit = octokitConfig;

  const githubResponse = await octokit.request(
    `GET ${repoUrl}/contents${datasourceLocation}`
  );

  const resourceData: ResourceData = JSON.parse(
    atob(githubResponse.data.content)
  );

  return resourceData;
};
