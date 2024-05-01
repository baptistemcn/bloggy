"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { getQueryClient } from "@/config";

import { DevModeProvider } from "./DevMode";

interface RootProviderProps {
  children: ReactNode;
}

export const RootProvider = (props: RootProviderProps) => {
  const queryClient = getQueryClient();

  const env = process.env.NODE_ENV;

  return (
    <QueryClientProvider client={queryClient}>
      <DevModeProvider {...{ env }}>{props.children}</DevModeProvider>
    </QueryClientProvider>
  );
};
