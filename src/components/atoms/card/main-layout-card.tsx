interface CardProps {
  children: React.ReactNode;
}

export const MainLayoutCard: React.FC<CardProps> = ({ children }) => {
  return (
    <main
      className={`flex flex-col max-w-[800px] border shadow-2xl rounded-lg min-w-full p-5 min-h-10 justify-center`}
    >
      {children}
    </main>
  );
};
