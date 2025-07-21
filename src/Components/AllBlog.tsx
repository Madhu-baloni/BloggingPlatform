import { Container, Grid, Typography } from "@mui/material";
import PostCard from "./PostCard";
import { useBlogContext } from "../CustomHooks/UseBlog";

const AllBlog: React.FC = () => {
  const { posts } = useBlogContext();

  return (
    <Container>
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#799351",
          lineHeight: 1,
          m: 4,
          textShadow: "2px 2px 5px #799351",
          textAlign: { xs: "center" },
        }}
      >
        All Posts Here
      </Typography>

      <Grid container spacing={2}>
        {posts.length === 0 && (
          <Typography
            sx={{ color: "black", m: 3, fontSize: "2rem", fontWeight: "bold" }}
          >
            no post yet...
          </Typography>
        )}
        {posts.map((post) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={post.id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default AllBlog;
