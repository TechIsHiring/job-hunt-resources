import { Icon } from "@/components/atoms/icon";
import { LoadingSpinner } from "@/components/atoms/loading-spinner";
import { FiExternalLink } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type AddResourceFormAltStateProps =
  | {
      submitting: boolean;
      complete?: undefined;
      pullRequestUrl?: undefined;
    }
  | {
      submitting?: undefined;
      complete: boolean;
      pullRequestUrl: string;
    };

export const AddResourceFormAltState = ({
  submitting,
  complete,
  pullRequestUrl,
}: AddResourceFormAltStateProps) => {
  return (
    <>
      {submitting && (
        <div className="flex items-center justify-center h-screen sm:h-96">
          <LoadingSpinner />
        </div>
      )}
      {complete && (
        <div className="flex flex-col gap-4 items-center justify-center !text-green-500 dark:!text-green-500 h-screen sm:h-96">
          <Icon
            icon={IoIosCheckmarkCircleOutline}
            iconAlt="Submission Complete Checkmark Icon"
            size={42}
            className="!text-green-500 dark:!text-green-500"
          />
          <div className="flex flex-col items-center gap-2">
            <span>Submission Complete!</span>
            <span className="flex gap-1">
              Review and track your submission{" "}
              <a
                className="underline flex items-center gap-1"
                href={pullRequestUrl}
                target="_blank"
                rel="noreferrer"
              >
                here
                <Icon
                  icon={FiExternalLink}
                  iconAlt={`external link to added resource for review`}
                  size={20}
                  className="!text-green-500 dark:!text-green-500"
                />
              </a>
            </span>
          </div>
        </div>
      )}
    </>
  );
};
