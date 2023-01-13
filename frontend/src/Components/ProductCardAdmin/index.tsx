import "./style.css"
import {Product} from "../Product";
import {useState} from "react";
import EditProductForm from "../EditProductForm";


export default function ProductCardAdmin({product, deleteProduct, editProduct}: { product: Product, deleteProduct: (id: string) => void, editProduct: (id: string) => void }) {
    const [showEditForm, setShowEditForm] = useState(false);
    const [editClicked, setEditClicked] = useState("Edit")

    const convert = Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
    });

    const handleShowEditForm = () => {
        setShowEditForm(current => !current);
    }
    const handleButtonClick = () => {
        setEditClicked(editClicked === "Edit" ?
            "Close" : "Edit")
    }
    function showEditProductForm() {
        editProduct(product.id);
        handleShowEditForm();
        handleButtonClick()
    }

    return (
        <li>
            <img alt={""} src={product.image}/>
            <h2>{product.name}</h2>
            <h4>{convert.format(product.price)}</h4>
            <p>{product.description}</p>

            <button onClick={showEditProductForm}>{editClicked}</button>
            {showEditForm && (
                <EditProductForm/>
            )}

            <button className={"delete-btn"} onClick={() => deleteProduct(product.id)}>Delete</button>
        </li>
    )
}