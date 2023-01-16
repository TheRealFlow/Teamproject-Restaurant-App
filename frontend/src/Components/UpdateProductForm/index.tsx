import "./style.css"
import React, {useCallback, useState} from "react";
import {Product} from "../Product";
import useProducts from "../../hooks/useProducts";

interface Props {
    id:string;
    onUpdate: () => void;
}
const categories = ["Vorspeise", "Hauptgericht", "Dessert", "Getränk"];

const UpdateProductForm: React.FC<Props> = ({id, onUpdate}) => {
    const [product, setProduct] = useState<Product>({} as Product);
    const {updateProduct} = useProducts();

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        await updateProduct(product);
        onUpdate();
    }, [product, updateProduct, onUpdate]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={"text"} value={product.name} placeholder={"Name"} onChange={e => setProduct({...product, name: e.target.value})}/>
                <input type={"number"} value={product.price} placeholder={"Price"} onChange={e => {
                    const parsedValue = parseFloat(e.target.value);
                    if (!isNaN(parsedValue)) {
                        setProduct({...product, price: parsedValue});
                    }
                }
                }/>
                <input type={"text"} value={product.image} placeholder={"Image URL"} onChange={e => setProduct({...product, image: e.target.value})}/>
                <select value={product.category} onChange={e => setProduct({...product, category: e.target.value})}>
                    <option value="" disabled>Select a category</option>
                    {categories.map(c => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
                <input type={"text"} value={product.description} placeholder={"Description"} onChange={e => setProduct({...product, description: e.target.value})}/>
                {/*<input type={"text"} placeholder={"Quantity"}/>*/}
                <button type={"submit"}>Update Product</button>
            </form>
        </>
    )
}
export default UpdateProductForm;