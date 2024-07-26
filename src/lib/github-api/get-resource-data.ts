"use server";

import { OctokitResponse } from "@octokit/types";
import { ResourceData } from "../types/job-resource-types";
import { datasourceLocation, octokitConfig, repoUrl } from "./config";

export const getResourceData = async () => {
  const octokit = octokitConfig;

  const githubResponse: OctokitResponse<{ content: string; sha: string }> =
    await octokit.request(`GET ${repoUrl}/contents${datasourceLocation}`);

  const fileSha = githubResponse.data.sha;

  const resourceData: ResourceData = JSON.parse(
    atob(githubResponse.data.content)
  );

  return { resourceData, fileSha };
};
