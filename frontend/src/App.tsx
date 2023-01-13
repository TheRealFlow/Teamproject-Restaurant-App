import React from 'react';
import './App.css';
import Admin from "./pages/admin";
import Home from "./pages/home";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {AllProducts} from "./Components/FilterComponents /AllProducts";
import {Starter} from "./Components/FilterComponents /Starter";
import {MainCourse} from "./Components/FilterComponents /MainCourse";
import {Dessert} from "./Components/FilterComponents /Dessert";



function App() {

    const linkStyle = {

        textDecoration: "none",
        color: 'white'

    };


    return (
      <>
        <Home/>
        <Admin/>

          <BrowserRouter>

              <ul className={"ulNav"}>
                  <li className={"liNav"}><Link className={"a"} to={"/allProducts"} style={linkStyle}>All Products</Link></li>
                  <li className={"liNav"}><Link className={"a"} to={"/starter"} style={linkStyle} >Starter</Link></li>
                  <li className={"liNav"}><Link className={"a"} to={"/mainCourse"} style={linkStyle} >Main Course</Link></li>
                  <li className={"liNav"}><Link  className={"a"} to={"/dessert"} style={linkStyle}>Dessert</Link></li>
              </ul>



              <Routes>
                  <Route path={"/allProducts"} element={<AllProducts/>}></Route>
                  <Route path={"/starter"} element={<Starter/>}></Route>
                  <Route path={"/mainCourse"} element={<MainCourse/>}></Route>
                  <Route path={"/dessert"} element={<Dessert/>}></Route>
              </Routes>
          </BrowserRouter>

      </>
  );
}

export default App;
