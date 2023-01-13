import "./style.css"
import React from "react";

export default function UserData() {
    return(
        <>
            <h4>Where should we deliver to?</h4>
            <form>
                <input type={"text"} placeholder={"First Name"}/><br></br>
                <input type={"text"} placeholder={"Last Name"}/><br></br>
                <input type={"text"} placeholder={"Street"}/><br></br>
                <input type={"text"} placeholder={"House Number"}/><br></br>
                <input type={"text"} placeholder={"Zipcode"}/><br></br>
                <input type={"text"} placeholder={"City"}/><br></br>
                <input type={"text"} placeholder={"Additional Information"}/><br></br>
                <br></br>
                <button type={"submit"}>PLACE ORDER</button>
                <br></br><br></br>
                ToDo // onSubmit: Daten werden an AdminPage weitergeleitet
                ToDo // onSubmit: Thank you for your Order! Please have your money prepared!
            </form>
        </>
    )
}