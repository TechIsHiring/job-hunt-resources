import {
  ResourceData,
  SubmitJobResource,
} from "@/lib/types/job-resource-types";
import { prepareCommitData } from "./prepare-commit-data";
import { datasourceLocation, octokitConfig, repoUrl } from "../../config";

export const updateDataStoreInNewBranch = async (
  branchName: string,
  currentData: ResourceData,
  formData: SubmitJobResource,
  fileSha: string
) => {
  const dataForCommitRequest = prepareCommitData(currentData, formData);
  const octokit = octokitConfig;

  const octoRequestBody = {
    content: dataForCommitRequest,
    message: `${formData.submitted_by}'s addition request for ${formData.name}`,
    branch: branchName,
    sha: fileSha,
  };

  await octokit.request(
    `PUT ${repoUrl}/contents${datasourceLocation}`,
    octoRequestBody
  );
};
