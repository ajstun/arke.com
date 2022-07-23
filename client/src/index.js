import React, { Component } from "react";
import ReactDOM from "react-dom"
import App from "./App.js";

import { BrowserRouter, Routes, Route } from "react-router-dom"

import "core-js/stable";


import "./index.scss"
import Features from "./pages/Portfolio/Features.js";
import Bts from "./pages/Portfolio/Bts.js";






ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/arke" element={<App />} />
            <Route path="/features/:portfolio_name" element={<Features />} />
            <Route path="/bts/:portfolio_name" element={<Bts />} />
        </Routes>
    </BrowserRouter>
    , document.getElementById('root')
)



