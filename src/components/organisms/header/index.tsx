import { Button } from "@/components/atoms/button";
import { Divider } from "@/components/atoms/divider";
import { Logo } from "@/components/atoms/logo";

export const Header = () => {
  return (
    <header className="flex flex-col gap-10">
      <Logo />
      <div className="flex flex-col gap-4">
        <Button className="w-fit">+ Add a New Job Resource</Button>
        <Divider />
      </div>
    </header>
  );
};
