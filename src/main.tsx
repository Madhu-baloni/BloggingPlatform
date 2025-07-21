import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BlogProvider } from "./ContextApi/BlogContext";
import RouterComp from "./Routing/RouterComp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlogProvider>
      <RouterComp />
    </BlogProvider>
  </StrictMode>
);
