import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  iconAlt: string;
  size?: number;
  color?: string;
}

export const Icon = ({
  icon: Icon,
  iconAlt,
  size = 24,
  color = "#000",
}: IconProps) => {
  return (
    <Icon
      className="!text-fglightmode dark:!text-fgdarkmode"
      size={size}
      title={iconAlt}
      color={color}
    />
  );
};
