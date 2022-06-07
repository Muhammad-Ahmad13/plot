// import React, {Component} from 'react';
import {Route,Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ChangePassword from './components/Navigationpages/ChangePassword';
import Forgot from './components/Navigationpages/Forgot';
import ModalSignLog from './components/Navigationpages/ModalSignLog';
import SignUP from './components/Navigationpages/SignUP';
import Starter from './components/Starter';
import ForStarter from './components/ForStarter/ForStarter';
import ContactUs from './components/ContactUs/ContactUs';
import RentalMain from './components/RentalPage/RentalMain';
import ProposalMain from './components/Proposal/ProposalMain';
import PricingMian from './components/Pricing/PricingMian';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path ='/' element ={<HomePage />}></Route>
        <Route exact path ='/signup' element ={<SignUP />}></Route>
        <Route exact path ='/login'  element ={<ModalSignLog />}></Route>
        <Route exact path='/forstarter' element ={<ForStarter/>}></Route>
        <Route exact path ='/changepass' element ={<ChangePassword />}></Route>
        <Route exact path='/contactus' element = {<ContactUs/>}></Route>
        {/* <Route exact path ='/forgot' element ={<Forgot />}></Route> */}
        {/* <Route  path='/starter' element={<Starter />}></Route> */}
        <Route exact path='/rental' element = {<RentalMain/>}></Route>
        <Route exact path='/proposal' element = {<ProposalMain/>}></Route>
        <Route exact path='/pricing' element = {<PricingMian/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
