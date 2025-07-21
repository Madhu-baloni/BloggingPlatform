import { Box, Stack, Typography } from "@mui/material";
import Buttons from "./Buttons";

const StoryPage: React.FC = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#799351",
          lineHeight: 1,
          m: 4,
          textAlign: "center",
          textShadow: "2px 2px 5px #799351",
        }}
      >
        Everyone Has a story to Tell
      </Typography>

      <Box sx={{ p: 2, fontSize: "1.5rem", textAlign: "center" }}>
        BlogSpot is a home for human stories and ideas. Here, anyone can share
        knowledge and wisdom with the world—without having to build a mailing
        list or a following first. BlogSpot is quiet yet full of insight. It’s
        simple, beautiful, collaborative, and helps you find the right readers
        for whatever you have to say.
      </Box>

      <Typography
        sx={{
          p: 2,
          fontSize: "2rem",
          textAlign: "center",
          textShadow: "2px 2px 5px #B12C00",
        }}
      >
        "Blogging is not rocket science. It's about being yourself and putting
        what you have into it."
      </Typography>

      <Box sx={{ p: 2, fontSize: "1.5rem", textAlign: "center", mb: 3 }}>
        We believe that what you read and write matters. Words can divide or
        empower us, inspire or discourage us. In a world where the most
        sensational and surface-level stories often win, we’re building a system
        that rewards depth, nuance, and time well spent. A space for thoughtful
        conversation more than drive-by takes, and substance over packaging.
      </Box>

      <Stack spacing={5} alignItems="center">
        <Buttons value="Start with us" />
        <Buttons value="Start reading" />
        <Buttons value="Start writing" />
      </Stack>

      <Box
        sx={{
          textAlign: "center",
          fontSize: "1.2rem",
          m: 5,
          fontWeight: "bold",
          color: "#799351",
          "&:hover": {
            textShadow: "2px 2px 5px #B12C00",
          },
        }}
      >
        Your Story 💗
      </Box>
    </>
  );
};
export default StoryPage;
