import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Typography } from "@mui/material";
import Layout from "../Components/Layout";
import HomePage from "../Components/HomePage";
import CreatePost from "../Components/CreatePost";
import StoryPage from "../Components/StoryPage";
import AuthPage from "../Components/Authentication/AuthPage";
import MyBlog from "../Components/MyBlog";
import AllBlogs from "../Components/AllBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <CreatePost />,
      },
      {
        path: "/storypage",
        element: <StoryPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/myblog",
        element: <MyBlog />,
      },
      {
        path: "/allblog",
        element: <AllBlogs />,
      },
      {
        path: "*",
        element: <Typography>404 - Page Not Found</Typography>,
      },
    ],
  },
]);

const RouterComp: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default RouterComp;
