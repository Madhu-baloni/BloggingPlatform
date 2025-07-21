import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { BlogPost } from "../Types/Type";

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  toggleState: () => void;
  state: boolean;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentUser, setCurrentUser] = useState<{ email: string } | null>(
    null
  );
  const [state, setState] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null");
    setCurrentUser(user);
  }, [state]);

  useEffect(() => {
    const onUserChange = () => {
      const user = JSON.parse(localStorage.getItem("currentUser") || "null");
      setCurrentUser(user);
    };

    window.addEventListener("userChanged", onUserChange);
    return () => window.removeEventListener("userChanged", onUserChange);
  }, [state]);

  useEffect(() => {
    if (currentUser?.email) {
      const storedPostsByUser = JSON.parse(
        localStorage.getItem("blogPostsByUser") || "{}"
      );
      const userPosts = storedPostsByUser[currentUser.email] || [];
      setPosts(userPosts);
    } else {
      setPosts([]);
    }
  }, [currentUser, state]);

  useEffect(() => {
    if (currentUser?.email) {
      const storedPosts = JSON.parse(
        localStorage.getItem("blogPostsByUser") || "{}"
      );
      storedPosts[currentUser.email] = posts;
      localStorage.setItem("blogPostsByUser", JSON.stringify(storedPosts));
    }
  }, [posts, currentUser, state]);

  const addPost = (post: BlogPost) =>
    setPosts((prevPosts) => [...prevPosts, post]);

  const deletePost = (id: string) => setPosts(posts.filter((p) => p.id !== id));
  const toggleState = () => setState((prev) => !prev);

  return (
    <BlogContext.Provider
      value={{ posts, addPost, deletePost, toggleState, state }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
