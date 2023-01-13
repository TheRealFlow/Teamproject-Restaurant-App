import React, {FormEvent, FormEventHandler, useState} from "react";
import axios from "axios";
import {Product} from "./model/Product";
import internal from "stream";

export default function AddProduct(){

    const [product,setProduct]=useState<Product>({
        name:"",
        id: "",
        prize:"",
        quantity : "",
        category : "",
        description : "",
        spicyScale : "",
        drinkSize : "",
        image : "",
    })
    const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
      setProduct({
          ...product,
          prize: event.target.value
      })
    }
    const onSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        axios.post("/order/",product)
    }
    return (
    <div>
        <form onSubmit={onSubmit}>

            <input value={product.prize} type="text" onChange={onChange}/>

        <button>
            Send Away
        </button>
        </form>
        </div>

    )

}

