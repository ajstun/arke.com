import React, { Component } from "react";
import ReactDOM from "react-dom"
import App from "./App.js";

import { BrowserRouter, Routes, Route } from "react-router-dom"

import "core-js/stable";


import "./index.scss"
import Arke from "./pages/Arke.js";
import Masters from "./pages/Masters.js";
import TechStack from "./pages/Tech Stack/TechStack.js";
import Contact from "./pages/Github/Contact.js";
import Features from "./pages/Portfolio/Features.js";
import Bts from "./pages/Portfolio/Bts.js";






ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/arke" element={<App />} />
            <Route path="/masters" element={<Masters />} />
            <Route path="/tech_stack" element={<TechStack />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features/:portfolio_name" element={<Features />} />
            <Route path="/bts/:portfolio_name" element={<Bts />} />
        </Routes>
    </BrowserRouter>
    , document.getElementById('root')
)



