import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [list, setList] = React.useState([
    {
      id: "1",
      fristname: "vinod",
      lastname: "rajput",
      email: "vr02589@gmail.com",
    },
    {
      id: "2",
      fristname: "aditya",
      lastname: "sharma",
      email: "as  0022@gmail.com",
    },
  ]);

  
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell align="right">Frist Name</StyledTableCell>

            <StyledTableCell align="right">Last Name&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Action&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((i, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {i.id}
              </StyledTableCell>
              <StyledTableCell align="right">{i.fristname}</StyledTableCell>
              <StyledTableCell align="right">{i.lastname}</StyledTableCell>
              <StyledTableCell align="right">{i.email}</StyledTableCell>
              <StyledTableCell align="right"> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
