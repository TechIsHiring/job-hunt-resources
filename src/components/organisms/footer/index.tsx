import { Button } from "@/components/atoms/button";
import { Divider } from "@/components/atoms/divider";
import { FooterInfo } from "@/components/molecules/footer-info";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 p-5 sticky bottom-0">
      <Divider />
      <div className="flex sm:flex-row gap-8 flex-col pt-3 items-center justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-fit">+ Add a Resource</Button>
          </DialogTrigger>
          <DialogContent className="bg-black sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when youre done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Name
                </label>
                <input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username" className="text-right">
                  Username
                </label>
                <input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <input type="submit" />
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <FooterInfo />
      </div>
    </footer>
  );
};
