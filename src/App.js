// import React, {Component} from 'react';
import {Route,Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ChangePassword from './components/Navigationpages/ChangePassword';
import Forgot from './components/Navigationpages/Forgot';
import Login from './components/Navigationpages/Login';
import SignUP from './components/Navigationpages/SignUP';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path ='/' element ={<HomePage />}></Route>
        <Route exact path ='/signup' element ={<SignUP />}></Route>
        <Route exact path ='/login' element ={<Login />}></Route>
        <Route exact path ='/forgot' element ={<Forgot />}></Route>
        <Route exact path ='/changepass' element ={<ChangePassword />}></Route>
      </Routes>
    </div>
  );
}
export default App;
