import Link from "@/components/atoms/link";

export const Logo = () => {
  return (
    <Link href="https://www.techishiring.com">
      <h1 className="flex gap-2 text-2xl font-logo">
        <span className="text-logo">TechIsHiring</span>
        Job Hunt Resources
      </h1>
    </Link>
  );
};
