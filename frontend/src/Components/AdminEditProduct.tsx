export default function AdminEditProduct() {
    return (
        <>
            <h1>Edit Products</h1>

            <ul>
                {products.length < 1 ?
                <h1>Keine Produkte vorhanden...</h1> :
                    products.map((product) =>
                    <li key={product.id}>{product.name}</li>)
                }
            </ul>
        </>
    )
}