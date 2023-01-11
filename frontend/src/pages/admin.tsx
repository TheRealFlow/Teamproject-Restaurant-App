import {useState} from "react";
import AdminAddProduct from "../Components/AdminAddProduct";
import AdminEditProduct from "../Components/AdminEditProduct";

export default function AdminDashboard() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditPage, setShowEditPage] = useState(false);

    const handleShowAddForm = () => {
        setShowAddForm(current => !current);
    }
    const handleShowEditPage = () => {
        setShowEditPage(current => !current);
    }

    return (
        <>
            <h1>Admin Dashboard</h1>

            <button onClick={handleShowAddForm}>Add new Product</button>
            {showAddForm && (
                <AdminAddProduct/>
            )}

            <button onClick={handleShowEditPage}>Edit Product</button>
            {showEditPage && (
                <AdminEditProduct/>
            )}
        </>
    )
}