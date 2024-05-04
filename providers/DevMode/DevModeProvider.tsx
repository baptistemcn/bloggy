import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

interface DevModeProviderProps {
  children: ReactNode;
  env: "development" | "production" | "test";
}

export const DevModeProvider = (props: DevModeProviderProps) => {
  return (
    <>
      {props.children}
      {props.env === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </>
  );
};
