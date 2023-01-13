import "./style.css"
import useProducts from "../../hooks/useProducts";
import ProductCardAdmin from "../ProductCardAdmin";

export default function ProductListAdmin() {
    const {products} = useProducts();

    return (
        <>
            {products.length >= 1 ? products.map((product) =>
                <ul key={product.id}>
                    <ProductCardAdmin product={product} />
                </ul>
            ) : <p>Keine Produkte vorhanden...</p>}
        </>
    )
}