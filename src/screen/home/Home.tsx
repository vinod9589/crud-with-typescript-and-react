import React, { useState } from "react";
import Header from "../../layout/header/Header";
import EmployeeList from "../../components/EmployeeList";
import { ContainerBox } from "./style";
import Buttons from "../../components/Buttons";
import { Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TextField, Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface UserType {
  id: string;
  fristname: string;
  lastname: string;
  email: string;
}

function Home() {
  const intialstate = { fristname: "", lastname: "", email: "", id: "" };

  const [postData, setPostData] = useState<UserType>(intialstate);

  const [list, setList] = useState<UserType[]>([]);

  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const handleSubmit = () => {
    setList([...list, postData]);
  };

  return (
    <div>
      <Header />
      <ContainerBox>
        <Typography> </Typography>
        <Typography>Employee List</Typography>
        <Box>
          <Buttons
            onClick={handleOpen}
            variant1="contained"
            text={"Add Employee"}
          />

          <div>
            <Modal
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <div className="text-center">
                    <h3>Create Task</h3>
                    <TextField
                      id="outlined-basic"
                      label="Frist Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      onChange={(e) =>
                        setPostData({ ...postData, fristname: e.target.value })
                      }
                    />
                    <TextField
                      id="filled-multiline-flexible"
                      label="Last Name"
                      multiline
                      maxRows={4}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      onChange={(e) =>
                        setPostData({ ...postData, lastname: e.target.value })
                      }
                    />
                    <TextField
                      id="filled-multiline-flexible"
                      label="Email"
                      multiline
                      maxRows={4}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      onChange={(e) =>
                        setPostData({ ...postData, email: e.target.value })
                      }
                    />
                  </div>
                  <Box textAlign="center" marginTop={1}>
                    <Buttons
                      onClick={handleSubmit}
                      variant1="contained"
                      text={"Submit"}
                    />
                  </Box>
                </Box>
              </Fade>
            </Modal>
          </div>
        </Box>
      </ContainerBox>
      <EmployeeList list={list} />
    </div>
  );
}

export default Home;
