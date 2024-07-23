import { JobHuntResourceList } from "@/components/organisms/job-hunt-resource-list";
import { getResourceData } from "@/lib/github-api/get-resource-data";

export default async function Home() {
  const resourceData = await getResourceData();

  return (
    <main className="flex flex-col gap-12">
      <JobHuntResourceList jobResources={resourceData} />
    </main>
  );
}
