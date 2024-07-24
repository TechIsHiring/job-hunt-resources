import { Divider } from "@/components/atoms/divider";
import { AddResource } from "@/components/organisms/add-resource";
import { FooterInfo } from "@/components/molecules/footer-info";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 p-5 bg-black sticky bottom-0">
      <Divider />
      <div className="flex sm:flex-row gap-8 flex-col pt-3 items-center justify-between">
        <AddResource />
        <FooterInfo />
      </div>
    </footer>
  );
};
