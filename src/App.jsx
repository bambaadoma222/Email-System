import React from "react";
import Home from "./Home";
import IndevSend from "./IndevSend";
import SendToList from "./SendToList";
import SendToAll from "./SendToAll";
import AddCustomer from "./AddCustomer";
import RemoveFromCustomer from "./RemoveFromCustomer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/IndevSend" element={<IndevSend />} />
        <Route path="/SendToList" element={<SendToList/>} />
        <Route path="/SendToAll" element={<SendToAll/>} />
        <Route path="/AddCustomer" element={<AddCustomer/>} />
        <Route path="/DeleteCustomer" element={<RemoveFromCustomer/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;