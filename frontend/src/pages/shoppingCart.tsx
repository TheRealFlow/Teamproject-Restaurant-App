import React, {useState} from "react";
import ProductList from "../Components/ProductList";
import AddProductForm from "../Components/AddProductForm";
import {Link} from "react-router-dom";
import UserData from "../Components/UserData";


export default function ShoppingCart() {

    return (
        <>
            <h1>TexMex</h1>
            <p>Shopping Cart</p>
            // ToDo: When empty: folgende Meldung. Wenn nicht, dann Anzeige der Produkte
            <p>What would you like to eat?
                <br></br>
                Order <Link to={"/"}>HERE in our Shop</Link>!
            </p>
            <UserData/>

            <br></br><br></br>

            // ToDo <br></br>
            // Inhalt aus product muss in Liste in ShoppingCart <br></br>
            // quantity muss geändert werden können <br></br>
            // totalprice = price * quantity muss angepasst werden <br></br>
            // bei Klick auf ORDER <br></br>
        </>


    );

}
