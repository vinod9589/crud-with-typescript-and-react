import React, { useContext } from "react";
import Header from "../../layout/header/Header";
import EmployeeList from "../../components/EmployeeList";
import { ContainerBox } from "./style";
import Buttons from "../../components/Buttons";
import { Typography } from "@mui/material";
import { HomeContext } from "../../context/Mycontext"; // Import context

function Home() {
  // Access context values directly
  const {  handleOpen } = useContext(HomeContext);

  return (
    <div>
      <Header />
      <ContainerBox>
        <Typography>Employee List</Typography>
        <Buttons onClick={handleOpen} variant1="contained" text={"Add Employee"} />
      </ContainerBox>
      <EmployeeList />
    </div>
  );
}

export default Home;
