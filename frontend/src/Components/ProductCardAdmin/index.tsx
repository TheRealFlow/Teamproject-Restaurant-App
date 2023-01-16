import "./style.css"
import {Product} from "../Product";
import {useState} from "react";
import UpdateProductForm from "../UpdateProductForm";


type ProductCardProps = {
    product: Product;
    deleteProduct: (id: string) => void;
}

export default function ProductCardAdmin(props: ProductCardProps) {
    const [productId, setProductId] = useState("");
    const [render, setRender] = useState({});
    const [showEditForm, setShowEditForm] = useState(false);
    const [editClicked, setEditClicked] = useState("Edit")

    const handleUpdate = () => {
        setRender(render);
    }

    const deleteHandler = () => {
        if (props.product.id === undefined){
            return null;
        }
        props.deleteProduct(props.product.id);
    }

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
        handleShowEditForm();
        handleButtonClick()
    }

    return (
        <li>
            <img alt={""} src={props.product.image}/>
            <h2>{props.product.name}</h2>
            <h4>{convert.format(props.product.price)}</h4>
            <p>{props.product.description}</p>

            <button onClick={showEditProductForm}>{editClicked}</button>
            {showEditForm && (
                <UpdateProductForm id={productId} onUpdate={handleUpdate}/>
            )}

            <button className={"delete-btn"} onClick={deleteHandler}>Delete</button>
        </li>
    )
}