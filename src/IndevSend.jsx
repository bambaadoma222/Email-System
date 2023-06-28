import React from "react";
import "./css/IndevSend.css";


export default function IndevSend() {
    //heading 
    return ( 
        <>
        <div>
            <h1 style={{textAlign: "center"}}>בחרי אדם לשלוח לו</h1>
        </div>
        <div className="input-container">
            <input type="text" placeholder="שם"/>
            <input type="text" placeholder="מייל (לא חובה)"/>
        </div>
        <div className="button-container">
            <button style={{marginTop: "25px"}}>שלחי</button>
        </div>
        </>
    );
} 