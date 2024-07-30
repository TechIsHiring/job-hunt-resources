import { cn } from "@/lib/shadcn-ui/utils";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  iconAlt: string;
  className?: string;
  size?: number;
  onClick?: (args: unknown) => unknown;
}

export const Icon = ({
  icon: Icon,
  iconAlt,
  className,
  onClick,
  size = 24,
}: IconProps) => {
  return (
    <Icon
      className={cn("!text-fglightmode dark:!text-fgdarkmode", className)}
      size={size}
      title={iconAlt}
      onClick={onClick}
    />
  );
};
