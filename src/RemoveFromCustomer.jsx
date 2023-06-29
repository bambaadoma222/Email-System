import React from "react";
import { useNavigate } from "react-router-dom";


function isSure() {
    if (window.confirm("האם את בטוחה שאת רוצה להסיר לקוח?")) {
        alert("הלקוח הוסר בהצלחה");
        //TODO: add remove customer function 
        return true; 
    } else {
        alert("הלקוח לא הוסר");
        return false; 
    }
} 
export default function RemoveFromCustomer() {
    const navigate = useNavigate(); 
    return ( 
        <>
        <div className="Heading">
            <h1 style={{textAlign: "center"}}>תפריט להסרת לקוח</h1>
        </div>

        <div> 
            <h3 style={{textAlign:"center"}}>בחרי את הלקוח אותו את רוצה להסיר</h3>
        </div>

        <div>
            <select> בחר לקוח</select>
        </div>

        <div className="button-container">
            <button style={{marginTop:"30px"}} onClick={isSure}>הסרה</button>
            <button style={{marginTop:"45px"}} onClick={()=> navigate("/")}>חזרה לתפריט הראשי</button>
        </div>
        </>
    ); 
} 
