import { tv } from "tailwind-variants";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const container = tv({
  base: "mx-auto max-w-7xl px-6 xl:px-0",
});

const Container = ({ children, className }: ContainerProps) => {
  return <div className={container({ class: className })}>{children}</div>;
};

export default Container;
