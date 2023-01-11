import AdminAddProduct from "../Components/AdminAddProduct";
import React, {useState} from "react";
import products from "../hooks/useProducts";
export default function Admin() {
    const [showAddForm, setShowAddForm] = useState(false);

    const handleShowAddForm = () => {
        setShowAddForm(current => !current);
    }

    return (
        <>
            <h1>Admin Dashboard</h1>

            <button onClick={handleShowAddForm}>Add new Product</button>
            {showAddForm && (
                <AdminAddProduct/>
            )}

            {products.length < 1 ?
                <p>Keine Producte vorhanden...</p> :
                <div>Platzhalter für ProductList</div>
            }
        </>
    )
}