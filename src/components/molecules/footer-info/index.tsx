import { Icon } from "@/components/atoms/icon";
import {
  SiGithub,
  SiLinkedin,
  SiPatreon,
  SiSubstack,
  SiTwitter,
} from "react-icons/si";

export const FooterInfo = () => {
  return (
    <div className="flex flex-col items-center md:items-end space-y-1">
      <div className="flex items-center justify-end space-x-8 pb-2">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.twitter.com/techishiring"
        >
          <Icon
            icon={SiTwitter}
            iconAlt="Twitter for Tech Is Hiring"
            size={20}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/techishiring"
        >
          <Icon icon={SiGithub} iconAlt="GitHub for Tech Is Hiring" size={20} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/techishiring"
        >
          <Icon
            icon={SiLinkedin}
            iconAlt="LinkedIn for Tech Is Hiring"
            size={20}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.patreon.com/techishiring"
        >
          <Icon
            icon={SiPatreon}
            iconAlt="Patreon for Tech Is Hiring"
            size={20}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://newsletter.techishiring.com/"
        >
          <Icon
            icon={SiSubstack}
            iconAlt="Tech Is Hiring Newsletter on Substack"
            size={20}
          />
        </a>
      </div>
      <p className="text-right font-inter text-xs font-medium lg:text-sm">
        {`© Copyright ${new Date().getFullYear()}, All rights reserved.`}
      </p>
    </div>
  );
};
