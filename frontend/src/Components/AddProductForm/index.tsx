import React, {useState} from "react";
import "./style.css"
import useProducts from "../../hooks/useProducts";
import {useNavigate} from "react-router-dom";

interface Props {}
const categories = ["Vorspeise", "Hauptgericht", "Dessert", "Getränk"];

const AddProductForm: React.FC<Props> = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const {addProduct} = useProducts();
    const navigate = useNavigate();

    const newProduct = (e: React.FormEvent) => {
        e.preventDefault();
        addProduct({name, price, image, description, category});
        setName("");
        setPrice(0);
        setImage("");
        setDescription("");
        setCategory("");
        navigate("/");
    };

    return(
        <>
            <h1>Add new Product</h1>
        <form onSubmit={newProduct}>
            <input type={"text"} value={name} placeholder={"Name"} onChange={e => setName(e.target.value)}/>
            <input type={"number"} value={price} placeholder={"Price"} onChange={e => setPrice(parseFloat(e.target.value))}/>
            <input type={"url"} value={image} placeholder={"Image URL"} onChange={e => setImage(e.target.value)}/>
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value={""} disabled>Category</option>
                {categories.map(c => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                    ))}
            </select>
            <input type="text" value={description} placeholder="Description" onChange={e => setDescription(e.target.value)}/>
            {/*<input type="text" placeholder="Quantity"/>*/}
            <button type={"submit"}>Add new Product</button>
        </form>
        </>
    )
}

export default AddProductForm;
