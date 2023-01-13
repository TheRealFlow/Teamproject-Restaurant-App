import ProductList from "../Components/ProductList";
import ProductDetails from "../Components/ProductDetails";
import {Product} from "../types/Product";
import {Link} from "react-router-dom";
import React from "react";

export default function Home() {


    return (
        <>
            <h1>Order TexMex</h1>

            <br></br>
            <button>Filter Function</button>
            <ProductList />

        </>
    )
}