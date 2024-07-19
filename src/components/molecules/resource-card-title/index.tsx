interface ResourceCardTitleProps {
  name: string;
}

export const ResourceCardTitle = ({ name }: ResourceCardTitleProps) => {
  return <h2 className="capitalize font-semibold">{name}</h2>;
};
