import React from 'react';
import HouseSearch from './HouseSearch';
import ReportHP from './ReportHP';
const ReportBid = () => {
  return (
    <div className="bidmain mt-5">
        <ReportHP
         hphead="Wat hebben kopers geboden op huizen?"
         hppara="Maak een Plotcore Plus rapport aan voor elk ander adres in Nederland."
        />
        <HouseSearch/>
    </div>
  );
}

export default ReportBid;