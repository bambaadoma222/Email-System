import React from "react";
import './CSS/SendToList.css';
import { useNavigate } from "react-router-dom";



export default function SendToList() {
    const navigate = useNavigate();
    return (
    <>
        <div>
            <h1 style={{textAlign: "center"}}>כאן תוכלי לשלוח למספר אנשים במקביל</h1>
        </div>
        <div className="input-container">
            <input type="text" placeholder="שם"/>
            <input type="text" placeholder="מייל (לא חובה)"/>
        </div>
        <div className="button-container">
            <button style={{marginTop: "35px"}}>הוסיפי לרשימה</button>
            <button style={{marginTop: "20px"}}> שליחה</button>
            <button style={{marginTop:"45px"}} onClick={()=> navigate("/")}>חזרה לתפריט הראשי</button>
        </div>
    </>
    ); 
} 