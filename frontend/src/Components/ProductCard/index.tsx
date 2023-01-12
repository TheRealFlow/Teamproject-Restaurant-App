import "./style.css"
import {Product} from "../Product";

export default function ProductCard({product, deleteProduct} : {product:Product, deleteProduct: (id: string) => void}) {

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
                <button>Edit</button>
                <button className={"delete-btn"} onClick={() => deleteProduct(product.id)}>Delete</button>
            </li>
        </>
    )
}