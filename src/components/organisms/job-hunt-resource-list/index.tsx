import { ResourceCardTitle } from "@/components/molecules/resource-card-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/atoms/card";
import { JobResource } from "@/lib/types/job-resource-types";
import { ResourceCardBody } from "@/components/molecules/resources-card-body";

interface JobHuntResourceListProps {
  jobResources: JobResource[];
}

export const JobHuntResourceList = ({
  jobResources,
}: JobHuntResourceListProps) => {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-6 w-full">
      {jobResources.map((jobResource, key) => (
        <AccordionItem key={key} className="border-0" value={`item-${key + 1}`}>
          <Card className="hover:bg-slate-500 hover:bg-opacity-35">
            <AccordionTrigger>
              <ResourceCardTitle name={jobResource.name} />
            </AccordionTrigger>
            <AccordionContent>
              <ResourceCardBody resourceDetails={jobResource} />
            </AccordionContent>
          </Card>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
