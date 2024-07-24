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
        <Button className="w-fit">+ Add a Resource</Button>
      </DialogTrigger>
      <DialogContent className="bg-black sm:max-w-[425px]">
        <DialogHeader className="flex flex-col gap-4 ">
          <DialogTitle>Add a Tech Job Search Resource</DialogTitle>
          <DialogDescription>
            If you have a resource that will be helpful to other tech
            professionals on the job hunt, use this form to add it to the list!
          </DialogDescription>
        </DialogHeader>
        <AddResourceForm />
      </DialogContent>
    </Dialog>
  );
};
