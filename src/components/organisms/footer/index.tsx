import { Button } from "@/components/atoms/button";
import { Divider } from "@/components/atoms/divider";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 p-5 sticky bottom-0">
      <Divider />
      <Button className="w-fit">+ Add a New Job Resource</Button>
    </footer>
  );
};
