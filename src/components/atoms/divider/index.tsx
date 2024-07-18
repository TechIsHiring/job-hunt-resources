import { cn } from "@/lib/shadcn-ui/utils";

export const Divider = ({ className }: React.ComponentProps<"div">) => {
  return <div className={cn("border-t-2 border-white", className)} />;
};
