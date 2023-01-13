import "./style.css"

export default function EditProductForm() {
    return (
        <>
            <form>
                <input type={"text"} placeholder={"Name"}/>
                <input type={"text"} placeholder={"Price"}/>
                <input type={"text"} placeholder={"Image URL"}/>
                <select>
                    <option>Category</option>
                    <option>Fleischgericht</option>
                    <option>Vegetarisch</option>
                    <option>Getränk</option>
                </select>
                <input type="text" placeholder="Description"/>
                <input type="text" placeholder="Quantity"/>
                <button type={"submit"}>Add new Product</button>
            </form>
        </>
    )
}