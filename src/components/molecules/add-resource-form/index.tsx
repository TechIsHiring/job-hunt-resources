import { getObjectKeys } from "@/lib/get-object-keys";
import { getResourceData } from "@/lib/github-api/get-resource-data/";
import { AddResourceFormDisplay } from "./add-resource-form-display";
import {
  SubmitJobResource,
  SubmitJobResourceZodSchema,
} from "@/lib/types/job-resource-types";
import { addResource } from "@/lib/github-api/add-resource";

export const AddResourceForm = async () => {
  const { resourceData, fileSha } = await getResourceData();
  const categories = getObjectKeys(resourceData);

  const handleFormSubmittion = async (formData: SubmitJobResource) => {
    "use server";

    try {
      const validatedFormData = SubmitJobResourceZodSchema.parse(formData);
      return await addResource(resourceData, validatedFormData, fileSha);
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  return (
    <AddResourceFormDisplay
      categories={categories}
      handleFormSubmittion={handleFormSubmittion}
    />
  );
};
