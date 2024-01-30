import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function Navbar() {

    
    

    const navigation = useNavigate();

        function addBlogg() {
            navigation("/addBlog");
            let addOn = document.getElementById("addBlogBtn1");

            addOn.style.display = "none";
        } 

        return(
            
            <header className="w-100 headerNav" id="navbar">
            <nav className="navbar navbar-expand-lg">
            <div className="container">
            <Link className="navbar-brand brand-logo" to={"/Dashboard"} >Blog API</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 gap-3">
                <li className="nav-item">
                <a className="nav-link a-nav" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link a-nav" href="#">Blog</a>
                </li>
                <li className="nav-item">
                <a className="nav-link a-nav" aria-current="page">Post</a>
                </li>
                <button className="addBlogBtn" id="addBlogBtn1" onClick={addBlogg}>ADD BLOG</button>
            </ul>
            </div>
        </div>
        </nav>
        
            </header>
        )
    }

export default Navbar;