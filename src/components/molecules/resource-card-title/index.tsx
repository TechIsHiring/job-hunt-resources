interface ResourceCardTitleProps {
  name: string;
  outline: string;
}

export const ResourceCardTitle = ({
  name,
  outline,
}: ResourceCardTitleProps) => {
  return (
    <div className="flex flex-col sm:items-start w-full gap-6">
      <span className="capitalize font-semibold sm:text-left">{name}</span>
      <p className="italic text-sm sm:text-left">{outline}</p>
    </div>
  );
};
