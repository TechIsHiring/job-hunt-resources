interface CardProps {
  children: React.ReactNode;
}

export const MainLayoutCard: React.FC<CardProps> = ({ children }) => {
  return (
    <main
      className={`flex flex-col max-w-[1024px] border-x-2 shadow-2xl p-5 h-full`}
    >
      {children}
    </main>
  );
};
