import { Icon } from "@/components/atoms/icon";
import { IconType } from "react-icons";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { PiBooksLight } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { PiBriefcaseLight } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";

interface CategoryIconProps {
  categoryTitle: string;
}

export const CategoryIcon = ({ categoryTitle }: CategoryIconProps) => {
  const categoryIcons: { [key: string]: IconType } = {
    books: PiBooksLight,
    communities: FaPeopleCarryBox,
    repos: FiGithub,
    people: IoPersonSharp,
    job_boards: PiBriefcaseLight,
    websites: CgWebsite,
  };

  return (
    <Icon
      icon={categoryIcons[categoryTitle]}
      iconAlt={`Icon for ${categoryTitle} category`}
      size={24}
    />
  );
};
