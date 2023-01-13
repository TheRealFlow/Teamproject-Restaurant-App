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

    async function editProduct(id: string) {
        const updated = {...products}
        await axios.put(`/products/${id}`, updated);
        setProducts(products.map(product => product.id === product.id ? {...product, ...updated} : product))
    }

    async function addProduct(product: Product) {
        const response = await axios.post("/products", product);
        setProducts([...products, response.data]);
    }

    return {products, deleteProduct, addProduct, editProduct}
}