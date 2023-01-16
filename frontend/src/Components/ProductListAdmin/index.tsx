import "./style.css"
import ProductCardAdmin from "../ProductCardAdmin";
import {Product} from "../Product";

type ProductListProps = {
    products: Product[];
    deleteProduct: (id: string) => void;
}

export default function ProductListAdmin(props: ProductListProps) {

    return (
        <>
            {props.products.length >= 1 ? props.products.map((product) =>
                <ul key={product.id}>
                    <ProductCardAdmin product={product} deleteProduct={props.deleteProduct} />
                </ul>
            ) : <p>Keine Produkte vorhanden...</p>}
        </>
    )
}