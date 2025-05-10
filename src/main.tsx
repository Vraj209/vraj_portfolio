import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { createBrowserRouter, RouterProvider } from "react-router";
import ProjectDescription from "./components/ProjectDescription.tsx";
import CertificateDescription from "./components/CertificateDescription.tsx";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 1000 * 60,
  //   },
  // },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDescription />,
  },
  {
    path: "/certificates/:id",
    element: <CertificateDescription />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
