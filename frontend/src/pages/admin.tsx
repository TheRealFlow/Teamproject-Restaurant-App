import {useState} from "react";
import AdminAddProduct from "../Components/AdminAddProduct";
import {Product} from "../Components/Product";


export default function Admin({products} : {products: Product[]}) {
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

            {products.length >= 1 ? products.map((product) =>
                <ul key={product.id}>
                    <li>{product.name}</li>
                </ul>
            ) : <p>Keine Producte vorhanden...</p>}
        </>
    )
}