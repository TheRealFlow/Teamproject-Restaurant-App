import React from "react";
import "./style.css"

export default function AddProductForm() {

    return(
        <>
            <h1>Add new Product</h1>
        <form className={'addProductFormform'}>
            <input type={"text"} placeholder={"Name"} />
            <input type={"number"} placeholder={"Price"} />
            {/*<input type={"url"} placeholder={"Image URL"} value={product.image} />
            <select>
                <option>Category</option>
                <option>Starter</option>
                <option>Main Course</option>
                <option>Dessert</option>
                <option>Beverage</option>
            </select>*/}
            <input type="text" placeholder="Description" />
            {/*<input type="text" placeholder="Quantity"/>*/}
            <button type={"submit"}>Add new Product</button>
        </form>
        </>
    )
}
