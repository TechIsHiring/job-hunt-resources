import { Button } from "@/components/atoms/button";
import { AddResourceForm } from "@/components/molecules/add-resource-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const AddResource = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit text-white">+ Add a Resource</Button>
      </DialogTrigger>
      <DialogContent className="bg-bglightmode text-fglightmode dark:bg-bgdarkmode dark:text-fgdarkmode sm:max-w-[600px] border-0 sm:border overflow-y-auto max-h-screen">
        <DialogHeader className="flex flex-col gap-4 ">
          <DialogTitle>Add a Tech Job Search Resource</DialogTitle>
          <DialogDescription className="font-medium">
            If you have a resource that will be helpful to other tech
            professionals on the job hunt, use this form to add it to the list!
          </DialogDescription>
        </DialogHeader>
        <AddResourceForm />
      </DialogContent>
    </Dialog>
  );
};
