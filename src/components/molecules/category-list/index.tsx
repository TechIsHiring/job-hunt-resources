import { Button } from "@/components/ui/button";

interface CategoryListProps {
  categoryList: string[];
}

export const CategoryList = ({ categoryList }: CategoryListProps) => {
  return (
    <nav className="flex gap-2 py-1">
      {categoryList.map((category, key) => (
        <a key={key} href={`#${category}`}>
          <Button className="rounded-full text-base font-semibold hover:bg-slate-400 bg-slate-200 text-black dark:hover:bg-slate-800 dark:bg-slate-600 dark:text-white">
            {category}
          </Button>
        </a>
      ))}
    </nav>
  );
};
