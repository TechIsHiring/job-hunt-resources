import { IconType } from "react-icons";

interface IconProps {
  Icon: IconType;
  iconAlt: string;
  size?: number;
  color?: string;
}

export const Icon = ({
  Icon,
  iconAlt,
  size = 24,
  color = "#000",
}: IconProps) => {
  return <Icon size={size} title={iconAlt} color={color} />;
};
