import {useState} from "react";
import AdminAddProduct from "../Components/AdminAddProduct";
import {Product} from "../Components/Product";


export default function Admin({products} : {products: Product[]}) {
    const [showAddForm, setShowAddForm] = useState(false);

    const handleShowAddForm = () => {
        setShowAddForm(current => !current);
    }

    const convert = Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
    });

    return (
        <>
            <h1>Admin Dashboard</h1>

            <button onClick={handleShowAddForm}>Add new Product</button>
            {showAddForm && (
                <AdminAddProduct/>
            )}

            {products.length >= 1 ? products.map((product) =>
                <ul key={product.id}>
                    <li>
                        <p>{product.name}</p>
                        <p>{convert.format(product.price)}</p>
                        <p>{product.description}</p>
                    </li>

                </ul>
            ) : <p>Keine Producte vorhanden...</p>}
        </>
    )
}