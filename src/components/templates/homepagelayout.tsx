interface HomePageLayoutProps {
  children: React.ReactNode;
}

export const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full min-h-full justify-center px-7">{children}</div>
  );
};
