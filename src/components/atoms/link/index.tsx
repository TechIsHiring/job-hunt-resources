import NextLink from "next/link";
interface LinkProps extends React.ComponentProps<typeof NextLink> {
  // Add additional prop definitions here
}

const Link = (props: LinkProps) => {
  return (
    <NextLink {...props} passHref className={`h-fit ${props.className}`}>
      {props.children}
    </NextLink>
  );
};

export default Link;
