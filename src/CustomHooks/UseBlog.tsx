import { useContext } from "react";
import BlogContext from "../ContextApi/BlogContext";

export const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider");
  }

  return context;
};
