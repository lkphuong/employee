import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import React from "react";

export default function CButtonIcons({
  type,
  isLoading,
  onClick,
  text,
  color,
}) {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", marginTop: 1 }}>
      <Button
        type={type}
        endDecorator={<KeyboardArrowRight />}
        color={color}
        onClick={onClick}
      >
        {isLoading ? (
          <img
            className="w-4 h-4 animate-spin"
            src="https://www.svgrepo.com/show/199956/loading-loader.svg"
            alt="Loading icon"
          ></img>
        ) : (
          text
        )}
      </Button>
    </Box>
  );
}
