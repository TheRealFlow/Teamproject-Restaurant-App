import "./style.css"
import {Product} from "../Product";
import ProductCardUser from "../ProductCardUser";

export default function ProductDetails({product}: { product: Product }) {

    const convert = Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
    });


    return (
        <>
            <li className={"liDetails"}>
                <button>x</button>
                <img alt={""} src={product.image}/>
                <h2>{product.name}</h2>
                <h4>{convert.format(product.price)}</h4>
                <p>{product.description}</p>
                <button>in den Warenkorb</button>
            </li>

        </>
    )
}