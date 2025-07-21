import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ButtonsProps {
  value: string;
}

const Buttons: React.FC<ButtonsProps> = ({ value }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };

  return (
    <>
      <Button
        sx={{
          background: "white",
          width: { xs: "25rem", md: "30rem" },
          height: "4rem",
          color: "white",
          fontSize: "1.2rem",
          backgroundColor: "#799351",
          "&:hover": {
            background: "#DA6C6C",
          },
        }}
        onClick={handleClick}
      >
        {value}
        <span style={{ marginTop: 4, padding: 2 }}>
          <ArrowForwardIcon />
        </span>
      </Button>
    </>
  );
};
export default Buttons;
