// import React, {Component} from 'react';
import {Route,Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ChangePassword from './components/Navigationpages/ChangePassword';
// import Forgot from './components/Navigationpages/Forgot';
import ModalSignLog from './components/Navigationpages/ModalSignLog';
import SignUP from './components/Navigationpages/SignUP';
// import Starter from './components/Starter';
import ForStarter from './components/ForStarter/ForStarter';
import ContactUs from './components/ContactUs/ContactUs';
import RentalMain from './components/RentalPage/RentalMain';
import ProposalMain from './components/Proposal/ProposalMain';
import PricingMian from './components/Pricing/PricingMian';
import TabsMain from './components/AccountTabs/TabsMain';
import ReportMain from './components/Report/ReportMain';
import Search from './components/Verfication/Search';
import Verificationmail from './components/Veificationmail/Verificationmail';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Privacy/Terms';
import Message from './components/Message/Message';
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
        <Route exact path='/profile' element = {<TabsMain/>}></Route>
        {/* <Route exact path='/report' element = {<ReportMain/>}></Route> */}
        <Route exact path='/verify' element = {<Search/>}></Route>
        <Route path={"/detail/:locat"} element = {<ReportMain/>}></Route>
        <Route path={"/mailverify"} element = {<Verificationmail/>}></Route>
        <Route path={"/privacy"} element = {<Privacy/>}></Route>
        <Route path={"/terms"} element = {<Terms/>}></Route>
        <Route path={"/message"} element = {<Message/>}></Route>
      </Routes> 
    </div>
  );
}
export default App;
