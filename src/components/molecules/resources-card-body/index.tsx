import { JobResource } from "@/lib/types/job-resource-types";
import { Divider } from "@/components/atoms/divider";
import { Icon } from "@/components/atoms/icon";
import { FiExternalLink } from "react-icons/fi";
import { Card } from "@/components/atoms/card";

interface ResourceCardBodyProps {
  resourceDetails: JobResource;
}

export const ResourceCardBody = ({
  resourceDetails,
}: ResourceCardBodyProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Divider className="border-slate-300 border-t-[1px]" />
      <div className="flex flex-col gap-4">
        <p className="w-full">Description: {resourceDetails.description}</p>
        <div className="flex items-center flex-wrap gap-4">
          {Object.keys(resourceDetails).map((objectKey, mapKey) =>
            objectKey !== "name" && objectKey !== "description" ? (
              <div
                className="lg:w-[calc(25%-16px)] md:w-[calc(50%-16px)] w-full"
                key={mapKey}
              >
                <Card>
                  {objectKey !== "link" && (
                    <span className="capitalize">{objectKey}: </span>
                  )}
                  {objectKey === "link" ? (
                    <a
                      className="flex gap-1 items-center hover:underline"
                      href={resourceDetails[objectKey]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="h-6 w-6">
                        <Icon
                          Icon={FiExternalLink}
                          color="white"
                          iconAlt={`external link to ${resourceDetails.name}`}
                        />
                      </span>
                      <p className="text-ellipsis overflow-hidden">
                        {resourceDetails[objectKey]}
                      </p>
                    </a>
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
