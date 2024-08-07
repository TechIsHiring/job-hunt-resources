import { FiExternalLink } from "react-icons/fi";
import { Icon } from "../icon";

interface RecordClickLinkProps {
  link: string;
  resourceName: string;
}

export const RecordClickLink = ({
  link,
  resourceName,
}: RecordClickLinkProps) => {
  return (
    <a
      className="flex gap-1 items-center hover:underline"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <span className="h-6 w-6">
        <Icon
          icon={FiExternalLink}
          iconAlt={`external link to ${resourceName}`}
        />
      </span>
      <p className="text-ellipsis truncate">{link}</p>
    </a>
  );
};
