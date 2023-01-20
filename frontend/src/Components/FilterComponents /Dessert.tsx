import './style.css';

import {useEffect, useState} from "react";
import axios from "axios";
import {Product} from "../Product";
import ProductCardUser from "../ProductCardUser";

export  function Dessert(){

    const [product,setProduct] = useState<Product[]>([])

    useEffect(() =>{
        axios.get("/products").
        then(response =>  response.data)
            .then(data => setProduct(data))
            .catch(error =>console.log(error))
    })


    return(
        <>
            <div className={"distanceTop"}>dessert</div>
            <div className={"chosenList"}>
                {!product?.length ? "No data" : (
                    <ul>
                        {product.filter((product) =>
                            product.category.includes('dessert')

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