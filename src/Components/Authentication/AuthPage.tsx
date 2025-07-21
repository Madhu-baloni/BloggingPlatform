import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../../CustomHooks/UseBlog";

const AuthPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { toggleState } = useBlogContext();

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({ name: "", email: "", password: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (isSignup) {
      const userExists = users.some(
        (user: { email: string }) => user.email === email
      );

      if (userExists) {
        alert("User already exists.");
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful! Please login.");
      toggleForm();
    } else {
      const matchedUser = users.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password
      );

      if (matchedUser) {
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));
        alert("Login successful!");
        toggleState();
        navigate("/");
      } else {
        alert("Invalid email or password.");
      }
    }

    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <Box
      sx={{
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={5}
        sx={{ p: 5, width: { xs: 300, md: 350 }, height: 350 }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#799351",
            mb: 3,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {!isSignup ? "Login" : "Sign Up"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            {isSignup && (
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
              />
            )}
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#799351" }}
            >
              {isSignup ? "Sign Up" : "Login"}
            </Button>
          </Stack>
        </form>

        <Typography mt={2} textAlign="center" fontSize="1.2rem">
          {isSignup ? "Don't have an account?" : "Already have an account?"}{" "}
          <Button
            variant="text"
            sx={{ color: "#799351", fontWeight: "bold", fontSize: "1.2rem" }}
            // onClick={() => setIsSignup(!isSignup)}
            onClick={toggleForm}
          >
            {isSignup ? "Login" : "Sign Up"}
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default AuthPage;
