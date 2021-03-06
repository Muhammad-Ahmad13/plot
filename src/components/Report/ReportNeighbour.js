import React, { createContext, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./ReportNeighbour.css";
import axios from 'axios';
import markermap from "../../assets/images/markermap.png";
export default function ReportNeighbour(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const {tokenSet} = useSelector(state => state.tok);
  let windowLoc1 = window.location.pathname;
  windowLoc1 = windowLoc1.replace("/detail/","");
  windowLoc1 = windowLoc1.split("-");
  windowLoc1 = windowLoc1[3]+"-"+windowLoc1[4]+"-"+windowLoc1[5];
  const [neighbourName, setNeighbourName]= useState([]);
  const [avail, setAvail] = useState(false);
  const getNeighbour = async () => {
    let accessHeaderNeigh = {
      headers: {'Authorization':"Bearer " +tokenSet}
    }
    const resp  = await axios.get("https://34.90.29.163:90/reterive_data/neighbours/?query="+ windowLoc1,accessHeaderNeigh);
    setNeighbourName(resp.data);
    props.setTotalNeigh(resp.data.length); 
    let priceDatam = 0;
    let priceTotalm = 0;
    for (let i = 0; i < resp.data.length; i++){
      priceDatam = priceDatam + (resp.data[i].asking_per_sq);
      priceTotalm = priceTotalm + (resp.data[i].total_asking_price);
    }
    props.setPriceInMeter(Math.round(priceTotalm/resp.data.length));
    props.setPriceInTotal(Math.round(priceDatam/resp.data.length));
    setAvail(true);
  };
  useEffect(() => {
    getNeighbour();
  }, []);
  const columns = [
    { id: 'Adres', label: 'Adres', minWidth: 250 },
    { id: 'Type', label: 'Type', minWidth: 250 },
    {
      id: 'Plot Size',
      label: 'Plot Size',
      minWidth: 100,
      align: 'left',
    },
    {
      id: 'price',
      label: 'Price',
      minWidth: 100,
      align: 'left',
    },
    {
      id: 'pricem',
      label: 'Price/m',
      minWidth: 100,
      align: 'left',
    },
    {
      id: 'Contruct-Year',
      label: 'Construct-Year',
      minWidth: 150,
      align: 'left',
    },
    {
      id: 'Distance',
      label: 'Distance (KM)',
      minWidth: 150,
      align: 'left',
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
    <div className="container">
      <div className="tablemain">
        <div className="dataTable">
          <div className='tablecontent'>
            <div className="tabSelect">
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className='tabImage'>
              <img src={markermap} alt="marker"/>
              <span>Toon op kaart</span>
            </div>
          </div>
        </div>
        {avail?
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ minHeight:500}}>
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
              {neighbourName
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                  return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>{row.name+", "+row.location}</TableCell>
                      <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>{row.house_type}</TableCell>
                      <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>{row.plot_size}</TableCell>
                      <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>{row.total_asking_price}</TableCell>
                      <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>{row.asking_per_sq}</TableCell>
                      <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>{row.construction_year}</TableCell>
                      <TableCell style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryMedium"}}>{row.distance}</TableCell>
                  </TableRow>
                  );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
          rowsPerPageOptions={[7]}
          component="div"
          count={neighbourName.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ color: "#231F20", fontSize:"18px", fontFamily:"giloryBold", marginTop:"15px"}}
          />  
      </Paper>
      :
      <div className="spinset m-3">
        <div className="spinner-grow" style={{color:"#1E87F0"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      }
    </div>
  </div>
</>
);
}
