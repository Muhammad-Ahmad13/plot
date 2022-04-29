// import React, {Component} from 'react';
import {Route,Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path ='/' element ={<HomePage />}></Route>
      </Routes>
    </div>
  );
}
export default App;
