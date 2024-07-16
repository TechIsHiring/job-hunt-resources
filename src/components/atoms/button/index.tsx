interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`rounded-full py-3 px-4 font-semibold text-sm bg-logo ${props.className}`}
    >
      {props.children}
    </button>
  );
};
