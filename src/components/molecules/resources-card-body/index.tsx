import { JobResource } from "@/lib/types/job-resource-types";
import { Divider } from "@/components/atoms/divider";
import { Card } from "@/components/atoms/card";
import { RecordClickLink } from "@/components/atoms/record-click-link";

interface ResourceCardBodyProps {
  resourceDetails: JobResource;
}

export const ResourceCardBody = ({
  resourceDetails,
}: ResourceCardBodyProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Divider className="border-fglightmode/60 dark:border-slate-300  border-t-[1px]" />
      <div className="flex flex-col gap-4">
        <p className="w-full">Description: {resourceDetails.description}</p>
        <div className="flex items-center flex-wrap gap-4">
          {Object.keys(resourceDetails).map((objectKey, mapKey) =>
            objectKey !== "name" &&
            objectKey !== "description" &&
            objectKey !== "outline" ? (
              <div
                className="lg:w-[calc(25%-16px)] md:w-[calc(50%-16px)] w-full"
                key={mapKey}
              >
                <Card className="min-h-[66px] text-ellipsis truncate">
                  {objectKey !== "link" && (
                    <span className="capitalize">
                      {objectKey.replace("_", " ")}:{" "}
                    </span>
                  )}
                  {objectKey === "link" ? (
                    <RecordClickLink
                      link={resourceDetails[objectKey]}
                      resourceName={resourceDetails.name}
                    />
                  ) : objectKey === "submitted_on" ? (
                    new Date(
                      `${resourceDetails[objectKey]}`
                    ).toLocaleDateString()
                  ) : (
                    resourceDetails[objectKey]
                  )}
                </Card>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
