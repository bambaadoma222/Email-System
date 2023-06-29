import React from "react";
import { useNavigate } from "react-router-dom";


export default function AddCustomer() {
    const navigate = useNavigate();
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
            <button style={{marginTop:"45px"}} onClick={()=> navigate("/")}>חזרה לתפריט הראשי</button>
        </div>
        </>
    ); 

} 
