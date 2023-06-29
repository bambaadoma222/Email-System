import React from "react";
import "./css/Home.css";
import { useNavigate } from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();
    return (
      <>
         <div style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "20px" }}>מה תרצי לעשות</h1>
        </div>
        <div className="button-container">
          <button style={{ marginTop: "20px" }} onClick={()=> navigate("/IndevSend")}>לשלוח ליחיד</button>
          <button style={{ marginTop: "20px" }} onClick={()=> navigate("/SendToList")}>לשלוח לרשימה</button>
          <button style={{ marginTop: "20px" }} onClick={()=> navigate("/SendToAll")}>לשלוח לכולם</button>
          <button style={{ marginTop: "20px" }} onClick={()=> navigate("/AddCustomer")}>להוסיף לרשימה</button>
          <button style={{ marginTop: "20px" }} onClick={()=> navigate("/DeleteCustomer")}>הסר לקוח</button>
        </div>
      </>
    );
  }