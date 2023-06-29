import React from "react";
import "./css/IndevSend.css";
import { useNavigate } from "react-router-dom";

export default function IndevSend() {
    const navigate = useNavigate();
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
            <button style={{marginTop:"45px"}} onClick={()=> navigate("/")}>חזרה לתפריט הראשי</button>
        </div>
        </>
    );
} 