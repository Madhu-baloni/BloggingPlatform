import { Container, Typography } from "@mui/material";
import PostForm from "./PostForm";

const createPost: React.FC = () => {
  return (
    <>
      <Container>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#799351",
            lineHeight: 1,
            m: 2,
            textShadow: "2px 2px 5px #799351",
          }}
        >
          Write Something you want 😀
        </Typography>

        <PostForm />
      </Container>
    </>
  );
};

export default createPost;
