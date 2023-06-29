import React from "react";
import './CSS/SendToAll.css';
import { useNavigate } from "react-router-dom";


export default function SendToAll(){ 
    const navigate = useNavigate();
    return (
    <>
    <div> 
        <h1 style={{textAlign: "center"}}>כאן תוכלי לשלוח לכולם</h1>
    </div>
    <div>
        <h3 style={{marginTop:"70px", textAlign: "center"}}> בלחיצה על הכפתור מייל ישלח לכל הלקוחות</h3>
    </div>

    <div className="button-container">
        <button style={{marginTop: "100px"}}>שליחה</button>
        <button style={{marginTop:"45px"}} onClick={()=> navigate("/")}>חזרה לתפריט הראשי</button>
    </div>
    </>
    ); 
}