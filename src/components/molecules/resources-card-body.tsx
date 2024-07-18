import { JobResource } from "@/lib/types/job-resource-types";
import { Divider } from "../atoms/divider";

interface ResourceCardBodyProps {
  resourceDetails: JobResource;
}

export const ResourceCardBody = ({
  resourceDetails,
}: ResourceCardBodyProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Divider className="border-slate-300 border-t-[1px]" />
      <div className="flex gap-4">
        {Object.keys(resourceDetails).map((objectKey, mapKey) =>
          objectKey !== "name" ? (
            <div key={mapKey}>
              <span className="capitalize">{objectKey}</span>:{" "}
              {resourceDetails[objectKey]}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
