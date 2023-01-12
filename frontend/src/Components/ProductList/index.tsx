import "./style.css"
import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard";

export default function ProductList() {
    const {products} = useProducts();

    return (
        <>
            {products.length >= 1 ? products.map((product) =>
                <ul key={product.id}>
                    <ProductCard product={product}/>
                </ul>
            ) : <p>Keine Producte vorhanden...</p>}
        </>
    )
}