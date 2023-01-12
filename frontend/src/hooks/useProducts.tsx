import {useEffect, useState} from "react";
import axios from "axios";
import {Product} from "../Components/Product";

export default function useProducts() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        (async () => {
            const response = await axios.get("/products")
            setProducts(response.data);
        })();
    }, []);

    async function deleteProduct(id: string) {
        await axios.delete(`/products/${id}`);
        setProducts(products.filter(product => product.id !== product.id))
    }

    return {products, deleteProduct}
}