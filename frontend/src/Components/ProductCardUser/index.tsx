import "./style.css"
import {Product} from "../Product";
import AddProductForm from "../AddProductForm";
import ProductDetails from "../ProductDetails";
import {useState} from "react";

export default function ProductCardUser({product}: { product: Product }) {

    const [showAddForm, setShowAddForm] = useState(false);

    const convert = Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
    });
    const handleShowAddForm = () => {
        setShowAddForm(current => !current);
    }
    return (
        <div>
            <li className={"liCard"}>
                <img alt={""} src={product.image}/>
                <h2>{product.name}</h2>
                <h4>{convert.format(product.price)}</h4>
                <p>{product.description}</p>
                <button onClick={handleShowAddForm}>Details</button>
                {showAddForm && (
                    <ProductDetails product={product}/>
                )}
                
            </li>

        </div>
    )
}