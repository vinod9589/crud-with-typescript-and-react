import React from "react";
import { Button } from "@mui/material";
type buttonProps = {
  style?: any;
  onClick?: () => void;
  variant1: "outlined" | "contained" | "text";
  text: any;
};


function Buttons({ style, onClick, variant1, text }: buttonProps) {

function go(){
    

}
  return (
    <>
      <Button onClick={go} variant={variant1} sx={{ ...style ,textTransform:"capitalize"}}>
        {" "}
        {text}{" "}
      </Button>
    </>
  );
}

export default Buttons;
