import { Outlet } from "react-router-dom";
import AppbarComp from "./Header/AppbarComp";
import { Box } from "@mui/material";
import Footer from "./Footer.tsx/FooterComp";

const Layout = () => {
  return (
    <>
      <AppbarComp />

      <Box sx={{ maxHeight: "700rem", minHeight: "50rem", mt: "10rem" }}>
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};

export default Layout;
