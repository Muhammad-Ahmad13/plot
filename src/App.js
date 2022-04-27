// import React, {Component} from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Starter from './components/Starter';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route  path='/starter' element={<Starter />}></Route>
      </Routes>
    </div>
  );
}
export default App;
