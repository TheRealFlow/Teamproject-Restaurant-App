import "./style.css"
import useProducts from "../../hooks/useProducts";
import ProductCardAdmin from "../ProductCardAdmin";

export default function ProductListAdmin() {
    const {products, deleteProduct, editProduct} = useProducts();

    return (
        <>
            {products.length >= 1 ? products.map((product) =>

                <ul key={product.id}>

                    <ProductCardAdmin product={product} deleteProduct={deleteProduct} editProduct={editProduct}/>

                </ul>
            ) : <p>Keine Produkte vorhanden...</p>}
        </>
    )
}