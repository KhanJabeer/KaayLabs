import React,{useState} from "react";
import TableComp from './Components/TableComp/TableComp';
import './App.css';
import {Provider} from "react-redux";
import store from "../src/Components/Store/Store";



const App = () => {
  
  return(
    <Provider store={store}>
       <TableComp />
    </Provider>
  )
}

export default App
