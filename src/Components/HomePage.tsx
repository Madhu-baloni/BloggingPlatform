import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import heroimg from "../assests/Hero.png";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid container spacing={10}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ maxWidth: "100%", height: "auto" }}
        >
          <Box
            sx={{
              display: "block",
              fontWeight: "bolder",
              fontSize: "5rem",
              mt: { xs: 3, md: 8 },
              lineHeight: "6rem",
              textShadow: "2px 2px 5px #213448",
              textAlign: { xs: "center", md: "none" },
            }}
          >
            Human
          </Box>

          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "4rem",
              textShadow: "2px 2px 5px #213448",
              textAlign: { xs: "center" },
            }}
          >
            Stories{" "}
            <span style={{ lineHeight: "2rem", fontSize: "5rem" }}>&</span>{" "}
            ideas
          </Typography>

          <Typography
            sx={{ fontSize: "2rem", m: 1, textAlign: { xs: "center" } }}
          >
            Everyone has a Story to tell
          </Typography>

          <Typography
            sx={{ fontSize: "1.2rem", m: 1, textAlign: { xs: "center" } }}
          >
            A place to read, write, and deepen your understanding
          </Typography>

          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{
                background: "#799351",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                mt: 3,
                "&:hover": {
                  background: "#DA6C6C",
                },
              }}
              onClick={() => navigate("/create")}
            >
              Get Started With us
            </Button>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              objectFit: "cover",
              marginTop: "-7rem",
            }}
          >
            <img
              src={heroimg}
              className="img"
              style={{ width: "50rem", height: "50rem" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
