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

  return (
      <>
        <Home/>
        <Admin/>

          <BrowserRouter>

              <ul>
                  <li><Link  to={"/allProducts"} >All Products</Link></li>
                  <li><Link  to={"/starter"} >Starter</Link></li>
                  <li><Link  to={"/mainCourse"} >Main Course</Link></li>
                  <li><Link  to={"/dessert"} >Dessert</Link></li>
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
