import React, { Component } from "react";
import ReactDOM from "react-dom"
import App from "./App.js";

import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./components/sass/index.scss"
import Arke from "./pages/Arke.js";
import Masters from "./pages/Masters.js";



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/arke" element={<Arke />} />
            <Route path="/masters" element={<Masters />} />
            <Route path="/tech_stack" element={<App />} />
 
        </Routes>
    </BrowserRouter>
    , document.getElementById('root'))



