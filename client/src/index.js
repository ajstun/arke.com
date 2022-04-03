import React from "react";
import ReactDOM from "react-dom"
import App from "./App.js";

import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./components/sass/index.scss"
import Arke from "./pages/Arke.js";
import Masters from "./pages/Masters.js";



ReactDOM.render(
    <BrowserRouter>
    
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/arke" element={<Arke />}></Route>
            <Route path="/masters" element={<Masters />}></Route>
        </Routes>
    
    </BrowserRouter>
    , document.getElementById("root"))