import {useState} from "react";

import AddProductForm from "../Components/AddProductForm";
import ProductListAdmin from "../Components/ProductListAdmin";
import useProducts from "../hooks/useProducts";


export default function Admin() {
    const {products, deleteProduct, updateProduct} = useProducts();
    const [showAddForm, setShowAddForm] = useState(false);
    const [buttonClicked, setButtonClicked] = useState("Add new Product");


    const handleShowAddForm = () => {
        setShowAddForm(current => !current);
    }
    const handleButtonClick = () => {
        setButtonClicked(buttonClicked === "Add new Product" ?
            "Close Formular" : "Add new Product")
    }
    function showAddProductForm() {
        handleButtonClick();
        handleShowAddForm()
    }

    return (
        <>
            <h1>Admin Dashboard</h1>

            <button onClick={showAddProductForm}>{buttonClicked}</button>
            {showAddForm && (
                <AddProductForm />
            )}
            <ProductListAdmin deleteProduct={deleteProduct} products={products}  updateProduct={updateProduct}/>
        </>
    )
}