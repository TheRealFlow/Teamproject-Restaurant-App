import React, {useState} from "react";
import {Product} from "../Product";
import {useNavigate} from "react-router-dom";

interface UpdateProps {
    product: Product;
    updateProduct: (product: { image: string; price: number; name: string; description: string; id: string; category: string }) => void;
}
const categories = ["Vorspeise", "Hauptgericht", "Dessert", "Getränk"];

const UpdateProductForm = ({product, updateProduct}: UpdateProps) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [image, setImage] = useState(product.image);
    const [description, setDescription] = useState(product.description);
    const [category, setCategory] = useState(product.category);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateProduct({id: product.id, name, price, image, description, category});
        navigate("/");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={"text"} value={name} placeholder={"Name"} onChange={e => setName(e.target.value)}/>
                <input type={"number"} value={price} placeholder={"Price"} onChange={e => setPrice(parseFloat(e.target.value))}/>
                <input type={"text"} value={image} placeholder={"Image URL"} onChange={e => setImage(e.target.value)}/>
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="" disabled>Select a category</option>
                    {categories.map(c => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
                <input type={"text"} value={description} placeholder={"Description"} onChange={e => setDescription(e.target.value)}/>
                {/*<input type={"text"} placeholder={"Quantity"}/>*/}
                <button type={"submit"}>Update Product</button>
            </form>
        </>
    )
}
export default UpdateProductForm;