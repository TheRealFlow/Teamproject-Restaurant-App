import "./style.css"
import {Product} from "../Product";
import ProductDetails from "../ProductDetails";
import {useState} from "react";

export default function ProductCardUser({product}: { product: Product }) {
    const [showProductDetails, setShowProductDetails] = useState(false);

    const convert = Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
    });
    const handleShowProductDetails = () => {
        setShowProductDetails(current => !current);
    }
    return (
        <div>
            <li>
                <img alt={""} src={product.image}/>
                <h2>{product.name}</h2>
                <h4>{convert.format(product.price)}</h4>
                <p>{product.description}</p>
                <button onClick={handleShowProductDetails}>Details</button>
                {showProductDetails && (
                    <ProductDetails product={product} onClose={()=> setShowProductDetails(false)}/>
                )}
                
            </li>

        </div>
    )
}