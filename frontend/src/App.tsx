import React from 'react';
import './App.css';
import Admin from "./pages/admin";
import Home from "./pages/home";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {AllProducts} from "./Components/FilterComponents /AllProducts";
import {Starter} from "./Components/FilterComponents /Starter";
import {MainCourse} from "./Components/FilterComponents /MainCourse";
import {Dessert} from "./Components/FilterComponents /Dessert";
import ShoppingCart from "./pages/shoppingCart";



function App() {

  return (
      <>


          <BrowserRouter>
              <ul>
                  <li><Link to={"/admin"}>Login</Link></li>
                  <li><Link to={"/"}>Shop</Link></li>
                  <li><Link to={"/shoppingcart"} >Shopping Cart</Link></li>
              </ul>


              <Routes>
                  <Route path={"/"} element={<Home/>}></Route>
                  <Route path={"/admin"} element={<Admin/>}></Route>
                  <Route path={"/shoppingcart"} element={<ShoppingCart/>}></Route>

              </Routes>
          </BrowserRouter>

      </>
  );
}

export default App;
