interface HomePageLayoutProps {
  children: React.ReactNode;
}

export const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-bglightmode text-fglightmode dark:bg-bgdarkmode dark:text-fgdarkmode flex w-full min-h-full justify-center px-7">
      {children}
    </div>
  );
};
