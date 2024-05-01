import { ReactNode } from "react";
import { clsx } from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  testID?: string;
}

export const Card = (props: CardProps) => {
  const { children, className, testID = "card" } = props;

  return (
    <div className={clsx("p-4 rounded", className)} data-testid={testID}>
      {children}
    </div>
  );
};
