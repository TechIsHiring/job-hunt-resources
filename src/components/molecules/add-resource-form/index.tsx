import { getObjectKeys } from "@/lib/get-object-keys";
import { getResourceData } from "@/lib/github-api/get-resource-data";
import { AddResourceFormDisplay } from "./add-resource-form-display";

export const AddResourceForm = async () => {
  const { resourceData } = await getResourceData();
  const categories = getObjectKeys(resourceData);

  return <AddResourceFormDisplay categories={categories} />;
};
