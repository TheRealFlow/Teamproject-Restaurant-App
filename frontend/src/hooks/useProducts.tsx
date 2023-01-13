import {useEffect, useState} from "react";
import axios from "axios";
import {Product} from "../Components/Product";
import {toast} from "react-toastify"

export default function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProducts()
    }, []);

    const getAllProducts = () => {
        axios.get("/products")
            .then(response => response.data)
            .then(data => setProducts(data))
            .catch((error) => toast.error(error.message))
    }

    const addNewProduct = (product:Product) => {
        axios.post("/products", product)
            .then(() => toast.success("Product added to Database"))
            .then(getAllProducts)
            .catch((error) => toast.error(error.message))
    }

    const editProduct = (product:Product) => {
        axios.put("/products", product)
            .then(getAllProducts)
            .then(() => toast.success("Product updated"))
            .catch((error) => toast.error(error.message))
    }

    const deleteProduct = (id:string) => {
        axios.delete(`/products/${id}`)
            .then(getAllProducts)
            .then(() => toast.success("Product deleted"))
            .catch((error) => toast.error(error.message))
    }

    return {products, getAllProducts, addNewProduct, editProduct, deleteProduct}
}