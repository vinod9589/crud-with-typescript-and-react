import React from "react";
import { Button } from "@mui/material";
type buttonProps = {
  style?: any;
  onClick?: () => void;
  variant1: "outlined" | "contained" | "text";
  text: any;
};


function Buttons({ style, onClick, variant1, text }: buttonProps) {

  return (
    <>
      <Button onClick={onClick} variant={variant1} sx={{ ...style ,textTransform:"capitalize"}}>
        {" "}
        {text}{" "}
      </Button>
    </>
  );
}

export default Buttons;
