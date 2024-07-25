import { Octokit } from "@octokit/core";

export const octokitConfig = new Octokit({ auth: process.env.GITHUB_PAT });
