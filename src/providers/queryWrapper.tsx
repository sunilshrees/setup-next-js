"use client";

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import {
  isServer,
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { queryConfig } from "@/lib/reactQuery";
import { handleError } from "@/utils/handlers/error";
import { AxiosError } from "axios";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      ...queryConfig,
    },
    queryCache: new QueryCache({
      onError: (error) => {
        "use client";
        handleError(error as AxiosError<any, any>);
      },
    }),
    //centralize error handling for mutations (e.g., useMutation)
    mutationCache: new MutationCache({
      onError: (error, _variables, _context, mutation) => {
        "use client";
        // If the mutation has its own onError, skip
        if (mutation.options.onError) return;

        handleError(error as AxiosError<any, any>);
      },
    }),
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function QueryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
