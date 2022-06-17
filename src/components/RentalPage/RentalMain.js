import React from 'react'
import HomeFooter from '../HomePage/HomeFooter/HomeFooter';
import HomeHeader from '../HomePage/HomeHead/HomeHeader';
import ComingDevelop from './ComingDevelop';
import HomeFinder from './HomeFinder';
import RentalHeader from './RentalHeader';
import RentalSteps from './RentalSteps';
import RentPackage from './RentPackage';
import TimeMain from './TimeMain';

const RentalMain = () => {
  return (
    <div>
        <HomeHeader/>
        <RentalHeader/>
        <HomeFinder/>
        <RentalSteps/>
        <TimeMain/>
        <RentPackage/>
        <ComingDevelop/>
        <HomeFooter/>
    </div>
  )
}

export default RentalMain;