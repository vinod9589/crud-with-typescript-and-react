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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Employee {
  id: string;
  fristname: string;
  lastname: string;
  email: string;
}


interface CustomizedTablesProps {
  list: Employee[]; 
}

const handleDelete = ()=>{

}

const CustomizedTables: React.FC<CustomizedTablesProps> = ({ list }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell align="right">First Name </StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((i,n) => (
            <StyledTableRow key={i.id}>
              <StyledTableCell component="th" scope="row">
                {n+1}
              </StyledTableCell>
              <StyledTableCell align="right">{i.fristname}</StyledTableCell>
              <StyledTableCell align="right">{i.lastname}</StyledTableCell>
              <StyledTableCell align="right">{i.email}</StyledTableCell>
              <StyledTableCell align="right">
                
                <button>Edit</button>
                <button  >Delete</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;
