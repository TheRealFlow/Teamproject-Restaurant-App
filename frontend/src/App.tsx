import React from 'react';
import './App.css';
import AdminDashboard from "./Pages/AdminDashboard";
import {HashRouter, Route, Routes} from "react-router-dom";
import AdminAddProduct from "./Components/AdminAddProduct";

function App() {
  return (
        <AdminDashboard/>
  );
}

export default App;
