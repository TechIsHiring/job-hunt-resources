interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <article
      className={`flex border rounded-lg min-w-full p-5 min-h-10 justify-center`}
    >
      {children}
    </article>
  );
};
