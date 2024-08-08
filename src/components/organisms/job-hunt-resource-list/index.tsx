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
import { CategoryIcon } from "@/components/molecules/category-icon";
import { replaceUnderscores } from "@/lib/replace-underscores";

interface JobHuntResourceListProps {
  jobResources: ResourceData;
  resourcesObjKey: string[];
}

export const JobHuntResourceList = ({
  jobResources,
  resourcesObjKey,
}: JobHuntResourceListProps) => {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-6 w-full">
      {resourcesObjKey.map((jobResourceIndex, key) => (
        <section key={key} className="flex flex-col gap-8">
          <Divider className="border-fglightmode/60 dark:border-slate-300 border-t-[1px]" />
          <span className="flex gap-4 px-2">
            <CategoryIcon
              categoryTitle={replaceUnderscores(jobResourceIndex)}
            />
            <h2 className="capitalize font-semibold">
              {jobResourceIndex.replace("_", " ")}
            </h2>
          </span>
          <div className="flex flex-col gap-6 w-full">
            {jobResources[jobResourceIndex].map((jobResource, key) => (
              <AccordionItem
                key={key}
                className="border-0"
                value={`${jobResourceIndex}-${key + 1}`}
              >
                <Card>
                  <AccordionTrigger className="gap-4">
                    <ResourceCardTitle
                      name={jobResource.name}
                      outline={jobResource.outline}
                    />
                  </AccordionTrigger>
                  <AccordionContent>
                    <ResourceCardBody resourceDetails={jobResource} />
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </div>
        </section>
      ))}
    </Accordion>
  );
};
