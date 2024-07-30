import { Icon } from "@/components/atoms/icon";
import { LoadingSpinner } from "@/components/atoms/loading-spinner";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type AddResourceFormAltStateProps =
  | {
      submitting: boolean;
      complete?: undefined;
    }
  | {
      submitting?: undefined;
      complete: boolean;
    };

export const AddResourceFormAltState = ({
  submitting,
  complete,
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
          Submission Complete!
        </div>
      )}
    </>
  );
};
