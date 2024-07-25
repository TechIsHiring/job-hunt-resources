import { getObjectKeys } from "@/lib/get-object-keys";
import { getResourceData } from "@/lib/github-api/get-resource-data";
import { AddResourceFormDisplay } from "./add-resource-form-display";

export const AddResourceForm = async () => {
  const categories = getObjectKeys(await getResourceData());

  return <AddResourceFormDisplay categories={categories} />;
};
