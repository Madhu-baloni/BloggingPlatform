import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Components/Layout";
import HomePage from "../Components/HomePage";
import CreatePost from "../Components/CreatePost";
import AllBlog from "../Components/AllBlog";
import StoryPage from "../Components/StoryPage";
import AuthPage from "../Components/Authentication/AuthPage";
import { Typography } from "@mui/material";

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
        path: "/allblog",
        element: <AllBlog />,
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
