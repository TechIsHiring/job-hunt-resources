"use client";

import { DialogFooter } from "@/components/ui/dialog";

interface AddResourceFormProps {
  categories: string[];
}

export const AddResourceFormDisplay = ({
  categories,
}: AddResourceFormProps) => {
  return (
    <>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="name" className="text-right">
            Name
          </label>
          <input
            id="name"
            placeholder="Name"
            className="text-black col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="url" className="text-right">
            Url
          </label>
          <input id="url" placeholder="Url" className="text-black col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="description" className="text-right">
            Description
          </label>
          <textarea
            id="description"
            className="text-black col-span-3 resize-none"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="owner" className="text-right">
            Owner
          </label>
          <input
            id="owner"
            placeholder="Owner"
            className="text-black col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="submitted_by" className="text-right">
            Submitter Name
          </label>
          <input
            id="submitted_by"
            placeholder="Submitter Name"
            className="text-black col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="category" className="text-right">
            Category
          </label>
          <select
            id="category"
            className="text-black col-span-3 capitalize py-[3px]"
          >
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
