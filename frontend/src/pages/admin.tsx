import {useState} from "react";

import AddProductForm from "../Components/AddProductForm";


export default function Admin() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [buttonClicked, setButtonClicked] = useState("Add new Product")

    const handleShowAddForm = () => {
        setShowAddForm(current => !current);
    }
    const handleButtonClick = () => {
        setButtonClicked(buttonClicked === "Add new Product" ?
            "Close Formular" : "Add new Product")
    }
    function clickAction() {
        handleButtonClick();
        handleShowAddForm()
    }

    return (
        <>
            <h1>Admin Dashboard</h1>

            <button onClick={clickAction}>{buttonClicked}</button>
            {showAddForm && (
                <AddProductForm/>
            )}

        </>
    )
}