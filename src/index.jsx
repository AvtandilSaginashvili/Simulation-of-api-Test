import React from "react";
import ReactDOM from "react-dom/client";

import "./Assets/style.css";
import Authorize from "./Components/Authorize";
import Dashboard from "./Components/Dashboard";
import AddBlog from "./Components/AddBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Details from "./Components/Details";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>

                <Routes>
                    <Route index path="/" element={<Authorize />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/AddBlog" element={<AddBlog />} />
                    <Route path="Details/:id" element={<Details />} />
                </Routes>
            </BrowserRouter>
            
        )
    }
}


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);