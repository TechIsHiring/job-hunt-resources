import { JobHuntResourceList } from "@/components/organisms/job-hunt-resource-list";

export default function Home() {
  return (
    <main>
      <JobHuntResourceList
        jobResources={[
          {
            test: "test",
          },
          {
            test: "test",
          },
        ]}
      />
    </main>
  );
}
