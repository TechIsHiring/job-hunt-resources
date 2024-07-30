import { cn } from "@/lib/shadcn-ui/utils";

interface CardProps extends React.ComponentProps<"article"> {
  // Add additional props here
}

export const Card = (props: CardProps) => {
  return (
    <article
      {...props}
      className={cn(
        "border border-fglightmode dark:border-fgdarkmode rounded-lg min-w-full p-5 min-h-10 justify-center",
        props.className
      )}
    >
      {props.children}
    </article>
  );
};
