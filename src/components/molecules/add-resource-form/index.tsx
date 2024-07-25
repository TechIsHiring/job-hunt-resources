import { DialogFooter } from "@/components/ui/dialog";
import { getObjectKeys } from "@/lib/get-object-keys";
import { getResourceData } from "@/lib/github-api/get-resource-data";

export const AddResourceForm = async () => {
  const categories = getObjectKeys(await getResourceData());

  return (
    <>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="name" className="text-right">
            Name
          </label>
          <input
            id="name"
            defaultValue="Pedro Duarte"
            className="text-black col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="username" className="text-right">
            Username
          </label>
          <input
            id="username"
            defaultValue="@peduarte"
            className="text-black col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="category" className="text-right">
            Category
          </label>
          <select id="category" className="text-black col-span-3 capitalize">
            {categories?.map((category, key) => (
              <option key={key} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <DialogFooter>
        <input type="submit" />
      </DialogFooter>
    </>
  );
};
