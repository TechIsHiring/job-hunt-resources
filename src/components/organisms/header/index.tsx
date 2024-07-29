import { Logo } from "@/components/atoms/logo";
import { ThemeToggle } from "@/components/atoms/theme-toggle";

export const Header = () => {
  return (
    <header className="flex justify-between">
      <Logo />
      <ThemeToggle />
    </header>
  );
};
