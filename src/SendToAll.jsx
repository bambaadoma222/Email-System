import React from "react";
import './CSS/SendToAll.css';

export default function SendToAll(){ 
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
    </div>
    </>
    ); 
}