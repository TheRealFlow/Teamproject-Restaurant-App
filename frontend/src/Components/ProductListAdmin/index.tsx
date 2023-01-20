import "./style.css"
import ProductCardAdmin from "../ProductCardAdmin";
import {Product} from "../Product";

type ProductListProps = {
    products: Product[];
    deleteProduct: (id: string) => void;
    updateProduct: (product: { id: string, image: string; price: number; name: string; description: string; category: string }) => void;
}

export default function ProductListAdmin(props: ProductListProps) {

    return (
        <>
            {props.products.length >= 1 ? props.products.map((product) =>
                <ul key={product.id}>
                    <ProductCardAdmin product={product} deleteProduct={props.deleteProduct}  updateProduct={props.updateProduct}/>
                </ul>
            ) : <p>Keine Produkte vorhanden...</p>}
        </>
    )
}