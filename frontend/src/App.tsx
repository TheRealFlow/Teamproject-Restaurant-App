import React from 'react';
import './App.css';
import Admin from "./pages/admin";
import Home from "./pages/home";
import useProducts from "./hooks/useProducts";

function App() {
  const {products} = useProducts();

  return (
      <>
        <Home/>
        <Admin products={products}/>
      </>
  );
}

export default App;
