import {useEffect, useState} from "react";
import axios from "axios";
import {Product} from "../Components/Product";

export default function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get('/products');
            setProducts(res.data);
        })();
    }, []);

    const addProduct = async (product: { image: string; price: number; name: string; description: string; category: string }) => {
        const res = await axios.post('/products', product);
        setProducts([...products, res.data]);
    };

    const updateProduct = async (product: Product) => {
        const res = await axios.put(`/products/${product.id}`, product);
        setProducts(
            products.map(p => (p.id === product.id ? res.data : p))
        );
    };

    const deleteProduct = async (id: string) => {
        await axios.delete(`/products/${id}`);
        setProducts(products.filter(p => p.id !== id));
    };

    return { products, addProduct, updateProduct, deleteProduct };
};