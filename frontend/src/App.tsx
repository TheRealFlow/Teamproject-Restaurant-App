import React, {useEffect, useState} from 'react';
import './App.css';
import {Product} from "./Components/Product";
import axios from "axios";
import AdminAddProduct from "./Components/AdminAddProduct";

function App() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/restaurant")
            setProducts(response.data);
        })();
    }, []);

  return (
      <>
          <AdminAddProduct/>
          {products.length <= 1 ?
              <p>Keine Producte vorhanden...</p> :
              <div>Platzhalter für ProductList</div>
          }
      </>
  );
}

export default App;
