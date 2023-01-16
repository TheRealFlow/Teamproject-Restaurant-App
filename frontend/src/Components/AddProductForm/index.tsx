import React, {useState} from "react";
import "./style.css"
import useProducts from "../../hooks/useProducts";

interface Props {}

const AddProductForm: React.FC<Props> = () => {
    const [name, setName] = useState('');
    const {addProduct} = useProducts();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addProduct({ name });
        setName('');
    };

    return(
        <>
            <h1>Add new Product</h1>
        <form onSubmit={handleSubmit}>
            <input type={"text"} value={name} placeholder={"Name"} onChange={e => setName(e.target.value)}/>
            {/*<input type={"number"} placeholder={"Price"} />
            <input type={"url"} placeholder={"Image URL"} value={product.image} />
            <select>
                <option>Category</option>
                <option>Starter</option>
                <option>Main Course</option>
                <option>Dessert</option>
                <option>Beverage</option>
            </select>
            <input type="text" placeholder="Description" />
            <input type="text" placeholder="Quantity"/>*/}
            <button type={"submit"}>Add new Product</button>
        </form>
        </>
    )
}

export default AddProductForm;
