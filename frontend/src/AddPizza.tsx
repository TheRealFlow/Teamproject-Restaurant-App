import {useState} from "react";

export default function AddPizza(){

    const [pizza,setPizza]=useState("")
    const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
      setPizza(event.target.value)
    }
    return (
    <div>
            <input value={pizza} type="text" onChange={onChange}/>
            <h1>
                {pizza}
            </h1>
        </div>

    )

}

