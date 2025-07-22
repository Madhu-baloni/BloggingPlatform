import { Box, Grid, Typography } from "@mui/material";
import PostCard from "./PostCard";
import type { BlogPost } from "../Types/Type";
const AllBlogs = () => {
  const data = JSON.parse(localStorage.getItem("blogPostsByUser") || "{}");
  console.log(data, "Thiss");
  const rawdata: any[] = Object.values(data).flat() || [];
  const allData: BlogPost[] = rawdata;

  return (
    <Box sx={{ m: 3 }}>
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
        All Blogs Here
      </Typography>

      <Grid container spacing={4}>
        {allData.length === 0 ? (
          <Typography
            sx={{ color: "black", m: 3, fontSize: "2rem", fontWeight: "bold" }}
          >
            no post yet...
          </Typography>
        ) : (
          allData?.map((post: BlogPost) => (
            <Grid size={{ xs: 12, md: 3, lg: 3 }} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default AllBlogs;
