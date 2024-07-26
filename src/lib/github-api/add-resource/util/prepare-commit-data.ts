import {
  ResourceData,
  SubmitJobResource,
} from "@/lib/types/job-resource-types";

export const prepareCommitData = (
  currentData: ResourceData,
  formData: SubmitJobResource
) => {
  const tempDataStore: ResourceData = JSON.parse(JSON.stringify(currentData));
  const { category, ...rest } = formData;
  const dateOfSubmission = new Date(Date.now()).toUTCString();
  const dataToInsert = { ...rest, submitted_on: dateOfSubmission };

  tempDataStore[category].push(dataToInsert);
  const dataForCommitRequest = Buffer.from(
    JSON.stringify(tempDataStore)
  ).toString("base64");
  return dataForCommitRequest;
};
