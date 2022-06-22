import "./Tabinginvoice.css";
import React, {useState} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
export default function Tabinginvoice() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [neighbourName, setNeighbourName]= useState([]);
  const [avail, setAvail] = useState(false);
  const columns = [
    { id: 'date', label: 'Date', minWidth: 200 },
    { id: 'invoice', label: 'Invoice No.', minWidth: 200 },
    {
      id: 'product',
      label: 'Product',
      minWidth: 300,
    },
    {
      id: 'amount',
      label: 'Amount',
      minWidth: 100,
    },
  ];  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ minHeight:330}}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                  <TableRow >
                  {columns.map((column) => (
                      <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, color: "#231F20", fontSize:"18px", fontFamily:"giloryBold", backgroundColor:"#EBEFF9"}}
                      >
                      {column.label}
                      </TableCell>
                  ))}
                  </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>May 20, 2022</TableCell>
                    <TableCell style={{ color: "#1E87F0", fontSize:"18px", fontFamily:"giloryMedium"}}>121-1212- 1314</TableCell>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>1 x   Plot core Plus (at € 3.237 per month)</TableCell>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>€ 2.203</TableCell>
                </TableRow>  
                <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>May 20, 2022</TableCell>
                    <TableCell style={{ color: "#1E87F0", fontSize:"18px", fontFamily:"giloryMedium"}}>121-1212- 1314</TableCell>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>1 x   Plot core Plus (at € 3.237 per month)</TableCell>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>€ 2.203</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>May 20, 2022</TableCell>
                    <TableCell style={{ color: "#1E87F0", fontSize:"18px", fontFamily:"giloryMedium"}}>121-1212- 1314</TableCell>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>1 x   Plot core Plus (at € 3.237 per month)</TableCell>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>€ 2.203</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>May 20, 2022</TableCell>
                    <TableCell style={{ color: "#1E87F0", fontSize:"18px", fontFamily:"giloryMedium"}}>121-1212- 1314</TableCell>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>1 x   Plot core Plus (at € 3.237 per month)</TableCell>
                    <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>€ 2.203</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
          rowsPerPageOptions={[7]}
          component="div"
          count={neighbourName.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryBold", marginTop:"15px" }}
          />   */}
      </Paper>
</>
);
}



        {/* <div style={{overflowX:"scroll"}}> */}
        {/* <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Invoice No.</th>
                    <th>Product</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>May 20, 2022</td>
                    <td>121-1212- 1314</td>
                    <td>1 x   Plot core Plus (at € 3.237 per month) </td>
                    <td>€ 2.203</td>
                </tr>
                <tr>
                    <td>May 20, 2022</td>
                    <td>121-1212- 1314</td>
                    <td>1 x   Plot core Plus (at € 3.237 per month) </td>
                    <td>€ 2.203</td>
                </tr>
                <tr>
                    <td>May 20, 2022</td>
                    <td>121-1212- 1314</td>
                    <td>1 x   Plot core Plus (at € 3.237 per month) </td>
                    <td>€ 2.203</td>
                </tr>
                <tr>
                    <td>May 20, 2022</td>
                    <td>121-1212- 1314</td>
                    <td>1 x   Plot core Plus (at € 3.237 per month) </td>
                    <td>€ 2.203</td>
                </tr>
            </tbody>
        </table> */}
        {/* </div> */}

