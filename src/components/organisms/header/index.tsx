import { Logo } from "@/components/atoms/logo";
import { ThemeToggle } from "@/components/atoms/theme-toggle";

export const Header = () => {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex justify-between">
        <Logo />
        <ThemeToggle />
      </div>
      <span>
        A community-driven list of job search resources for Tech Professionals.
      </span>
    </header>
  );
};
