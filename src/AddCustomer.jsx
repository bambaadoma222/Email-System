import React from "react";

export default function AddCustomer() {

    return (
        <>
        <div className="Heading">
            <h1 style={{textAlign: "center"}}>תפריט להוספת לקוח</h1>
        </div>
    
        <div>
            <h3 style={{textAlign:"center", marginTop:"40px"}}>בכדי להוסיף לקוח, הכניסי את המייל והשם של הלקוח</h3>
        </div>
    
        <div className="input-container">
            <input type="text" placeholder="שם" style={{marginTop:"20px"}}/>
            <input type="text" placeholder="מייל" style={{marginTop:"5px"}}/>
        </div>
    
        <div className="button-container">
            <button style={{marginTop:"30px"}}>הוספה</button>
        </div>
        </>
    ); 

} 
