import { Octokit } from "@octokit/core";

export const octokitConfig = new Octokit({ auth: process.env.GITHUB_PAT });

export const repoUrl = "/repos/TechIsHiring/job-search-resource-data";

export const datasourceLocation = "/resources-data/data.json";
