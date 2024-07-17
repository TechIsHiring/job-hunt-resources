interface HomePageLayoutProps {
  children: React.ReactNode;
}

export const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full h-screen justify-center px-10">{children}</div>
  );
};
