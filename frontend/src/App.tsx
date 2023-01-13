import React from 'react';
import './App.css';
import Admin from "./pages/admin";
import Home from "./pages/home";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Dessert} from "./pages/Dessert";
import {AllProducts} from "./pages/AllProducts";
import {Starter} from "./pages/Starter";
import {MainCourse} from "./pages/MainCourse";


function App() {

  return (
      <>
        <Home/>
        <Admin/>

          <BrowserRouter>

              <ul>
                  <li><Link  to={""} >All Products</Link></li>
                  <li><Link  to={"/starter"} >Starter</Link></li>
                  <li><Link  to={"/mainCourse"} >Main Course</Link></li>
                  <li><Link  to={"/dessert"} >Dessert</Link></li>
              </ul>

              <Routes>
                  <Route path={""} element={<AllProducts/>}></Route>
                  <Route path={"/starter"} element={<Starter/>}></Route>
                  <Route path={"/mainCourse"} element={<MainCourse/>}></Route>
                  <Route path={"/dessert"} element={<Dessert/>}></Route>

              </Routes>
          </BrowserRouter>

      </>
  );
}

export default App;
