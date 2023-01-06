export default function AdminAddProduct() {
    return(
        <>
            <h1>Add new Product</h1>
        <form onSubmit={}>
            <input type={"text"} placeholder={"Name"} defaultValue={name} onChange={}/>
            <input type={"text"} placeholder={"Price"} defaultValue={price} onChange={}/>
            <input type={"text"} placeholder={"Image URL"} defaultValue={imgURL} onChange={}/>
            <select>
                <option>Fleischgericht</option>
                <option>Vegetarisch</option>
                <option>Getränk</option>
            </select>
            <input type="text" placeholder="Description" defaultValue={description} onChange={}/>
            <input type="text" placeholder="Quantity" defaultValue={quantity} onChange={}/>
            <button type={"submit"}>Add new Product</button>
        </form>
        </>
    )
}