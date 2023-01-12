import "./style.css"
import {Product} from "../Product";

export default function ProductCard({product} : {product:Product}) {

    const convert = Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
    });

    return (
        <>
            <li>
                <img alt={""} src={product.image}/>
                <h2>{product.name}</h2>
                <h4>{convert.format(product.price)}</h4>
                <p>{product.description}</p>
            </li>
        </>
    )
}