import { CategoryIcon } from "../category-icon";

interface CategoryTitleProps {
  categoryName: string;
}

export const CategoryTitle = ({ categoryName }: CategoryTitleProps) => {
  return (
    <span className="flex gap-4 px-2">
      <CategoryIcon categoryTitle={categoryName} />
      <h2 className="capitalize font-semibold">
        {categoryName.replace("_", " ")}
      </h2>
    </span>
  );
};
