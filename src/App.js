import "./index.css";
import { React, useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
 return ( 
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
  </Routes>
  </BrowserRouter>

 )
}

export default App;
