import { JobHuntResourceList } from "@/components/organisms/job-hunt-resource-list";
import { getObjectKeys } from "@/lib/get-object-keys";
import { getResourceData } from "@/lib/github-api/get-resource-data";

/* 
  Sets revalidation for all requests in Next.js' App Router for this route segment to be an hour:
  https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
*/

export const revalidate = 3600;

export default async function Home() {
  const { resourceData } = await getResourceData();
  const jobResourceObjKeys = getObjectKeys(resourceData);

  return (
    <main className="flex flex-col gap-12">
      <JobHuntResourceList
        jobResources={resourceData}
        resourcesObjKey={jobResourceObjKeys}
      />
    </main>
  );
}
