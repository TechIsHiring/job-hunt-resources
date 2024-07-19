import { JobHuntResourceList } from "@/components/organisms/job-hunt-resource-list";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <JobHuntResourceList
        jobResources={[
          {
            name: "test",
            description: "test",
            url: "test",
            points: "test",
          },
          {
            name: "test",
            description: "test",
            url: "test",
          },
        ]}
      />
    </main>
  );
}
