import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import HomeFooter from '../HomePage/HomeFooter/HomeFooter';
import ReportBid from './ReportBid';
import ReportFacts from './ReportFacts';
import ReportMissmain from './ReportMissmain';
import ReportNearby from './ReportNearby';
import ReportProperty from './ReportProperty';
import ReportSpar from './ReportSpar';
import ReportHeader from './ReportHeader';
import ReportHWrap from './ReportHWrap';
import HwrapContent from './HwrapContent';
import ReportProg from './ReportProg';
import headImage1 from "../../assets/images/modern-image.png";
import ReportRecent from './ReportRecent';
import ReportNeighbour from './ReportNeighbour';
import Search from "../Verfication/Search";
const ReportMain = () => {
  let windowLoc = window.location.pathname;
  windowLoc = windowLoc.split("/")[2];
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [apart, setApart] = useState("");
  const [pict, setPict] = useState("");
  const [bed, setBed] = useState("");
  const [year, setYear] = useState("");
  const [meter, setMeter] = useState("");
  const [scrap, setScrap] = useState("");
  const [locat , setLocat] = useState("");
  const [meterPrice, setMeterPrice] = useState("");
  const [load, setLoad] = useState(false);
  const [upFive, setUpFive] = useState("");
  const [lFive, setLFive] = useState("");
  const [lTen, setLTen] = useState("");
  const [upmFive, setUpmFive] = useState("");
  const [lmFive, setLmFive] = useState("");
  const [lmTen, setLmTen] = useState("");
  const [totalNeigh, setTotalNeigh] = useState(0);
  const [priceInMeter, setPriceInMeter] = useState(0);
  const [priceInTotal, setPriceInTotal] = useState(0);
  const getClient = async () => {
    const response  = await axios.get("https://34.90.29.163:90/reterive_data/details/?query="+ windowLoc);
    console.log(response)
    setClient(response.data.details.name);
    setDescription(response.data.details.description);
    setPict(response.data.picture.picture_1);
    setPrice(response.data.total_price);
    var dotPrice = (response.data.total_price);
    var upPrice = dotPrice + (dotPrice*(0.05));
    setUpFive(upPrice);
    var lPriceFive = dotPrice - (dotPrice*(0.05));
    setLFive(lPriceFive);
    var lPriceTen = dotPrice - (dotPrice*(0.1));
    setLTen(lPriceTen);
    setLocat(response.data.details.location);
    setApart(response.data.details.house_type);
    setYear(response.data.details.construction_year);
    setMeter(response.data.details.plot_size);
    setBed(response.data.details.bedrooms);
    setScrap(response.data.details.scraped_from);
    setMeterPrice(response.data.asking_price_meter_sq);
    var metPrice = (response.data.asking_price_meter_sq);
    var upmPrice = Math.round(metPrice + (metPrice*(0.05)));
    setUpmFive(upmPrice);
    var lmPriceFive = Math.round(metPrice - (metPrice*(0.05)));
    setLmFive(lmPriceFive);
    var lmPriceTen = Math.round(metPrice - (metPrice*(0.1)));
    setLmTen(lmPriceTen);
    setLoad(true);
  };
  useEffect(() => {
    getClient();
    return () => {
    };
  }, []);
  const generatePdf = ()=>{
    var doc = new jsPDF('p', 'pt');
    doc.text(20, 20,"Property Name:" + client + ", " + locat )
    doc.addFont('helvetica', 'normal')
    doc.text(20, 60, 'Year:'+ year)
    doc.text(20, 80, 'Beds:'+ bed) 
    doc.text(20, 100, 'Apartment:'+ apart)
    doc.text(20, 120, 'Price:'+ price)      
    doc.save('plotcore.pdf')
}
const generateExcel = ()=>{
  var docExcel = new jsPDF('p', 'pt');
  // docExcel.text(20, 20,"Property Name:" + client + ", " + locat );
  //   docExcel.addFont('helvetica', 'normal')
  //   docExcel.text(20, 60, 'Year:'+ year)
  //   docExcel.text(20, 80, 'Beds:'+ bed) 
  //   docExcel.text(20, 100, 'Apartment:'+ apart)
  //   docExcel.text(20, 120, 'Price:'+ price)   
  docExcel.save('plotcore.xlsx');
}
// let dataP = price;
// let datam = meterPrice;
  return (
    <div className="reportmain">
      {load ?
      <> 
        <ReportHeader/>
        <ReportHWrap/>
        <HwrapContent
        wrapName = {client + ", " + locat}
        headImage = {pict}
        wrapdescrip ="Ontdek alles wat je wilt weten over dit huis. Extra paar ogen nodig? Deel dit rapport met familie, vrienden of bespreek het met een aankoopexpert van Walter Alles-in-1."
        handlePdf={generatePdf}
        handleExcel= {generateExcel}>
        </HwrapContent>
        <ReportProg
        propertyName={client + ", " + locat}
        pApart = {apart +"· "}
        pYear = {year +"· "}
        pRoom = {bed +" Kamers· "}
        pArea = {meter +"· "}               
        pColor = ""
        pLocation = ""
        pdataloc = {scrap}
        name1 = "Ziet er nieuw uit"
        value1 = {"€ "+upFive}
        name2 = "Redelijk onderhouden"
        value2 = {"€ "+lFive}
        name3 = "Goed onderhouden"
        value3 = {"€ "+price}
        name4 = "Toe aan onderhoud"
        value4 = {"€ "+lTen}
        name5 = "Ziet er nieuw uit"
        value5 = {"€ "+upmFive}
        name6 = "Redelijk onderhouden"
        value6 = {"€ "+lmFive}
        name7 = "Goed onderhouden"
        value7 = {"€ "+meterPrice}
        name8 = "Toe aan onderhoud"
        value8 = {"€ "+lmTen}
        />
        <ReportMissmain/>
        <ReportNearby/>
        <ReportRecent/>
        <ReportNeighbour
        setTotalNeigh={setTotalNeigh}
        totalNeigh={totalNeigh}
        setPriceInMeter={setPriceInMeter}
        priceInMeter={priceInMeter}
        priceInTotal= {priceInTotal}
        setPriceInTotal={setPriceInTotal}/>
        <ReportSpar/>
        <ReportFacts
        pricest = {priceInTotal}
        pricetm = {priceInMeter}
        totalNeigh={totalNeigh}
        />
        <ReportProperty/>
        <ReportBid/>
        <HomeFooter/>
      </> : 
      <div className="spinset" style={{display:"flex", alignItems:"center",justifyContent:"center", height:"100vh"}}>
        <div className="spinner-grow" style={{color:"#1E87F0"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
        }
    </div>
  );
}
export default ReportMain;