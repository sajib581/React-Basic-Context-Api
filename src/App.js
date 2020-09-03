import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipmemt/Shipment';
import { useState } from 'react';

export const CatagoryContext = createContext()
function App() {
  const [catagory, setCatagory] = useState();
  return (
    <CatagoryContext.Provider value={[catagory,setCatagory]}>
      <p>Count Value : {catagory}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CatagoryContext.Provider>
  );
}

export default App;
