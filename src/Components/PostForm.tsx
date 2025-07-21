import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, TextField } from "@mui/material";
import { useBlogContext } from "../CustomHooks/UseBlog";

const PostForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const editor = useRef(null);
  const { addPost } = useBlogContext();
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser") || "null"
    );
    if (currentUser) {
      setAuthor(currentUser.name || currentUser.email);
    } else {
      navigate("/auth");
    }
  }, [navigate]);

  const handleSubmit = () => {
    addPost({
      id: uuidv4(),
      title,
      author,
      content,
      date: new Date().toLocaleDateString(),
    });
    navigate("/allblog");
  };

  return (
    <>
      <Box sx={{ p: 2, m: 1 }}>
        <Box>
          <TextField
            sx={{ m: 2, background: "white" }}
            fullWidth
            label="Title"
            variant="filled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>

        <TextField
          sx={{ m: 2, background: "white" }}
          fullWidth
          label="Author"
          variant="filled"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <Box sx={{ m: 2, width: "100%" }}>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            config={{
              readonly: false,
              height: "400px",
            }}
          />
        </Box>

        <Button
          variant="contained"
          sx={{
            width: "10rem",
            height: "3rem",
            background: "#799351",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
            p: 1,
            m: 2,
            "&:hover": {
              background: "#DA6C6C",
            },
          }}
          onClick={handleSubmit}
        >
          Post
        </Button>
      </Box>
    </>
  );
};

export default PostForm;
