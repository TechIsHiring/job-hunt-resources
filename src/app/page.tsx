import { JobHuntResourceList } from "@/components/organisms/job-hunt-resource-list";
import { getObjectKeys } from "@/lib/get-object-keys";
import { getResourceData } from "@/lib/github-api/get-resource-data/";

// Route Segment Config

/*
  dynamic: Sets when pages are rendered in the app
  https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
*/

export const dynamic = "force-dynamic";

/* 
  revalidate: Sets the caching behaviour of fetch requests
  https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
*/

export const revalidate = 3600;

// END Route Segment Config

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
