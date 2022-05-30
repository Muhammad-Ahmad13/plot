// import React, {Component} from 'react';
import {Route,Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ChangePassword from './components/Navigationpages/ChangePassword';
import Forgot from './components/Navigationpages/Forgot';
import ModalSignLog from './components/Navigationpages/ModalSignLog';
import SignUP from './components/Navigationpages/SignUP';
import Starter from './components/Starter';
import UserInfo from './components/UserInfo/UserInfo';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path ='/' element ={<HomePage />}></Route>
        <Route exact path ='/signup' element ={<SignUP />}></Route>
        <Route exact path ='/login'  element ={<ModalSignLog />}></Route>
        <Route exact path='/userinfo' element ={<UserInfo/>}></Route>
        {/* <Route exact path ='/forgot' element ={<Forgot />}></Route> */}
        <Route exact path ='/changepass' element ={<ChangePassword />}></Route>
        <Route  path='/starter' element={<Starter />}></Route>
      </Routes>
    </div>
  );
}
export default App;
