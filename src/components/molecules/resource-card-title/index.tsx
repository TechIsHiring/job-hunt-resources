interface ResourceCardTitleProps {
  name: string;
}

export const ResourceCardTitle = ({ name }: ResourceCardTitleProps) => {
  return <h3 className="capitalize font-semibold">{name}</h3>;
};
