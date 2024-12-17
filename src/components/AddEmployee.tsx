import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TextField, Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { useContext } from "react";
import { HomeContext } from "../context/Mycontext"; // Import your context

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

const AddEmployee: React.FC = () => {
  // const [open, setOpen] = React.useState<boolean>(false);

  // const handleOpen = (): void => setOpen(true);
  // const handleClose = (): void => setOpen(false);
  //  const  {open,handleClose,handleOpen} = useContext(HomeContext)

  const { open, handleClose } = useContext(HomeContext);

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button> */}

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
                label="Outlined"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="filled-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddEmployee;
