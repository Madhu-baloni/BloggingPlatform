import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Stack,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useBlogContext } from "../../CustomHooks/UseBlog";
import type { currUser } from "../../Types/Type";

const AppbarComp: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentUser, setCurrentUser] = useState<currUser | null>(null);
  const { state } = useBlogContext();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null");
    setCurrentUser(user);
  }, []);

  const handleClick = () => navigate("/");

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleLogin = () => {
    navigate("/auth");
    handleClose();
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    handleClose();
    setCurrentUser(null);
    navigate("/");
    window.dispatchEvent(new Event("userChanged"));
  };

  useEffect(() => {
    const fetchUser = () => {
      const user = JSON.parse(localStorage.getItem("currentUser") || "null");
      setCurrentUser(user);
    };

    fetchUser();

    window.addEventListener("userChanged", fetchUser);
    return () => window.removeEventListener("userChanged", fetchUser);
  }, [state]);

  return (
    <Box>
      <AppBar sx={{ p: 1.5, background: "#f5f5f5" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "#537D5D",
              mt: 1,
              cursor: "pointer",
              textShadow: "2px 2px 5px #799351",
              "&:hover": { textShadow: "2px 2px 5px #DA6C6C" },
            }}
            onClick={handleClick}
          >
            BlogSpot
          </Typography>

          <Stack direction="row" spacing={5} alignItems="center">
            <Typography
              onClick={() => navigate("/storypage")}
              sx={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                color: "#537D5D",
                cursor: "pointer",
                textShadow: "2px 2px 5px #799351",
                "&:hover": { color: "#DA6C6C" },
              }}
            >
              Our Story
            </Typography>
            <Typography
              onClick={() => navigate("/allblog")}
              sx={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                color: "#537D5D",
                cursor: "pointer",
                textShadow: "2px 2px 5px #799351",
                "&:hover": { color: "#DA6C6C" },
              }}
            >
              Blogs
            </Typography>

            <IconButton onClick={handleMenuClick}>
              <AccountCircleIcon sx={{ color: "#537D5D", fontSize: "2rem" }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {currentUser ? (
                <Box>
                  <MenuItem disabled>Welcome, {currentUser.name}</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Box>
              ) : (
                <MenuItem onClick={handleLogin}>Login</MenuItem>
              )}
            </Menu>
          </Stack>
        </Box>
      </AppBar>
    </Box>
  );
};

export default AppbarComp;
