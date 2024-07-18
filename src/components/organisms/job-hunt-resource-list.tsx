import { ResourceCardTitle } from "@/components/molecules/resource-card-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/atoms/card";
import { JobResource } from "@/lib/types/job-resource-types";
import { ResourceCardBody } from "../molecules/resources-card-body";

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
          <Card>
            <AccordionTrigger>
              <ResourceCardTitle name="Test Job Resource" />
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
