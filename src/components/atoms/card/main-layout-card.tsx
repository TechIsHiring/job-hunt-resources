interface CardProps {
  children: React.ReactNode;
}

export const MainLayoutCard: React.FC<CardProps> = ({ children }) => {
  return (
    <div
      className={`flex flex-col gap-4 max-w-[1024px] w-full border-x-md shadow-lg shadow-white p-5 h-full`}
    >
      {children}
    </div>
  );
};
