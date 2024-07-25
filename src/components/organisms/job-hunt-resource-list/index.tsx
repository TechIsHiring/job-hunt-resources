import { ResourceCardTitle } from "@/components/molecules/resource-card-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/atoms/card";
import { ResourceData } from "@/lib/types/job-resource-types";
import { ResourceCardBody } from "@/components/molecules/resources-card-body";
import { Divider } from "@/components/atoms/divider";

interface JobHuntResourceListProps {
  jobResources: ResourceData;
  resourcesObjKey: string[];
}

export const JobHuntResourceList = ({
  jobResources,
  resourcesObjKey,
}: JobHuntResourceListProps) => {
  return (
    <>
      {resourcesObjKey.map((jobResourceIndex, key) => (
        <section key={key} className="flex flex-col gap-8">
          <Divider className="border-slate-300 border-t-[1px]" />
          <h2 className="capitalize font-semibold pl-5">{jobResourceIndex}</h2>
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-6 w-full"
          >
            {jobResources[jobResourceIndex].map((jobResource, key) => (
              <AccordionItem
                key={key}
                className="border-0"
                value={`item-${key + 1}`}
              >
                <Card className="hover:bg-slate-500 hover:bg-opacity-35">
                  <AccordionTrigger className="gap-4">
                    <ResourceCardTitle name={jobResource.name} />
                  </AccordionTrigger>
                  <AccordionContent>
                    <ResourceCardBody resourceDetails={jobResource} />
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
    </>
  );
};
