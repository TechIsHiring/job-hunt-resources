import { JobHuntResourceList } from "@/components/organisms/job-hunt-resource-list";

export default function Home() {
  return (
    <main>
      <JobHuntResourceList
        jobResources={[
          {
            name: "test",
            description: "test",
            url: "test",
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
