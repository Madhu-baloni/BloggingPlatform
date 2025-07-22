import { useLocation } from "react-router-dom";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import type { BlogPost } from "../Types/Type";
import { useBlogContext } from "../CustomHooks/UseBlog";

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const location = useLocation();
  const isAllBlogPage = location.pathname.includes("allblog");
  const { deletePost } = useBlogContext();
  const plainText = post.content.replace(/<[^>]+>/g, "");

  return (
    <Box sx={{ textAlign: "center" }}>
      <Card
        sx={{
          background: "#799351",
          maxHeight: { xs: "35rem", md: "40rem" },
          minHeight: { xs: "35rem", md: "40rem" },
          maxWidth: { xs: "25rem", md: "20rem" },
          minWidth: { xs: "10rem", md: "20rem" },
          "&:hover": {
            boxShadow:
              "box-shadow: rgba(182, 51, 51, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            color: "white",
            textAlign: "center",
            p: 3,
            fontWeight: "bold",
          }}
        >
          {" "}
          {post.title}
        </Typography>

        <CardContent sx={{ overflowY: "auto" }}>
          <Box
            sx={{
              fontSize: "1.2rem",
              color: "white",
              p: 1,
              textAlign: "justify",
            }}
          >
            {plainText}
          </Box>
        </CardContent>

        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box sx={{ display: "block" }}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              {post.author}
            </Typography>

            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "white",
                textAlign: "center",
              }}
            >
              {post.date}
            </Typography>
          </Box>

          {!isAllBlogPage && (
            <Button
              onClick={() => deletePost(post.id)}
              sx={{ color: "white", fontSize: "1rem", p: "1rem" }}
            >
              Delete
            </Button>
          )}
        </Box>
      </Card>
    </Box>
  );
};
export default PostCard;
