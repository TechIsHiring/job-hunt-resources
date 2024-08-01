interface ResourceCardTitleProps {
  name: string;
  outline: string;
}

export const ResourceCardTitle = ({
  name,
  outline,
}: ResourceCardTitleProps) => {
  return (
    <div className="flex flex-col items-start w-full gap-6">
      <span className="capitalize font-semibold">{name}</span>
      <span className="italic text-sm">{outline}</span>
    </div>
  );
};
