import Link from "@/components/atoms/link";

export const Logo = () => {
  return (
    <h1 className="flex sm:flex-row flex-col gap-2 text-2xl font-logo">
      <Link href="https://www.techishiring.com">
        <span className="text-logo">TechIsHiring</span>
      </Link>
      Job Hunt Resources
    </h1>
  );
};
