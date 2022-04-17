import React, { Component } from "react";
import ReactDOM from "react-dom"
import App from "./App.js";

import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.scss"
import Arke from "./pages/Arke.js";
import Masters from "./pages/Masters.js";
import TechStack from "./pages/Tech Stack/TechStack.js";
import Contact from "./pages/Github/Contact.js";



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/arke" element={<Arke />} />
            <Route path="/masters" element={<Masters />} />
            <Route path="/tech_stack" element={<TechStack />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
    , document.getElementById('root'))



