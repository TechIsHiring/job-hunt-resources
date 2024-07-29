import {
  ResourceData,
  SubmitJobResource,
} from "@/lib/types/job-resource-types";
import { makeBranchName } from "./util/make-branch-name";
import { createBranch } from "./util/create-branch";
import { updateDataStoreInNewBranch } from "./util/update-data-store-in-new-branch";
import { createPullRequestFromNewBranchToMain } from "./util/create-pull-request-from-new-branch-to-main";

export const addResource = async (
  currentData: ResourceData,
  formData: SubmitJobResource,
  fileSha: string
) => {
  const branchName = makeBranchName();
  await createBranch(branchName);
  await updateDataStoreInNewBranch(branchName, currentData, formData, fileSha);
  await createPullRequestFromNewBranchToMain(
    branchName,
    formData.submitted_by,
    formData.name
  );
};
