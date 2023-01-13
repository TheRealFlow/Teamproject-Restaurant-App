import './style.css';
import {useEffect, useState} from "react";
import {Product} from "../Product";
import axios from "axios";
import ProductCardUser from "../ProductCardUser";

export function MainCourse(){

    const [product,setProduct] = useState<Product[]>([])

    useEffect(() =>{
        axios.get("/products").
        then(response =>  response.data)
            .then(data => setProduct(data))
            .catch(error =>console.log(error))
    })


    return(
        <>
            <div className={"distanceTop"}>Main Course</div>
            <div className={"chosenList"}>
                {!product?.length ? "No data" : (
                    <ul>
                        {product.filter((product) =>
                            product.category.includes('maincourse')

                        ).map((product) => (
                            <ul key={product.id}>
                                <ProductCardUser product={product}/>
                            </ul>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}