interface CardProps {
  children: React.ReactNode;
}

export const MainLayoutCard: React.FC<CardProps> = ({ children }) => {
  return (
    <div
      className={`flex flex-col justify-between max-w-[1024px] w-full border-x-md shadow-lg shadow-fglightmode dark:shadow-fgdarkmode px-5 h-full`}
    >
      {children}
    </div>
  );
};
