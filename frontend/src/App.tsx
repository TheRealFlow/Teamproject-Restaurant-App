import React, {useEffect, useState} from 'react';
import './App.css';
import {Product} from "./Components/Product";
import axios from "axios";
import AdminAddProduct from "./Components/AdminAddProduct";

function App() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [products, setProducts] = useState<Product[]>([])

    const handleShowAddForm = () => {
        setShowAddForm(current => !current);
    }

    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/restaurant")
            setProducts(response.data);
        })();
    }, []);

  return (
      <>
          <h1>Admin Dashboard</h1>

          <button onClick={handleShowAddForm}>Add new Product</button>
          {showAddForm && (
              <AdminAddProduct/>
          )}

          {products.length <= 1 ?
              <p>Keine Producte vorhanden...</p> :
              <div>Platzhalter für ProductList</div>
          }
      </>
  );
}

export default App;
