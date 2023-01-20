import "./style.css"
import useProducts from "../../hooks/useProducts";
import ProductCardUser from "../ProductCardUser";

export default function ProductListUser() {
    const {products} = useProducts();

    return (
        <>
            {products.length >= 1 ? products.map((product) =>

                <ul key={product.id}>

                    <ProductCardUser product={product}/>

                </ul>
            ) : <p>Keine Produkte vorhanden...</p>}
        </>
    )
}