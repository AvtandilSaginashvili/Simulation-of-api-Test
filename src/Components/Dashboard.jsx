import React, { useState } from "react";
import { Link } from "react-router-dom";


import bookmark from "../Assets/Pics/bookmark.png";
import axios from "axios";
import Navbar from "./Navbar";

function Dashboard() {


        const [data, setData] = useState([]);

            axios.get("https://apitest.reachstar.io/blog/list").then(function (response) {
                setData(response.data);
                
              })
              .catch(function (error) {
                console.log(error);
              });
              
              



    return ( <React.Fragment>
        <div className="w-100">

            <div className="w-100 landing">
            <Navbar />

            <div className="container-fluid mt-5">
                <div className="row pt-4">
                    <div className="col-12">
                    <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <div className="w-100 pb-5">

                        <h1 className="text-center h1-beautiful">A BEAUTIFUL BLOG WITH NO<br /> IMAGES REQUIRED</h1>
                        <p className="text-center p-madison mt-4">Bu Madison Barnett / In Humans / 5 Comments</p>

                        <div className="row pt-3">
                            <div className="col-md-6 col-12">
                                <div className="w-100 d-flex justify-content-end">
                                    <button className="readonbtn">READ ON</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="w-100">
                                    <button className="readlaterbtn"><img src={bookmark} style={{width: "14px", height: "14px"}} alt="bookmark" /> READ LATER</button>
                                </div>
                            </div>
                        </div>

                        </div>
                        </div>
                        <div className="carousel-item">
                        <div className="w-100 pb-5">

                        <h1 className="text-center h1-beautiful">WHAT COULD POSSIBLY GO<br /> WRONG?</h1>
                        <p className="text-center p-madison mt-4">Bu Madison Barnett / In Humans / 3 Comments</p>

                        <div className="row pt-3">
                            <div className="col-md-6 col-12">
                                <div className="w-100 d-flex justify-content-end">
                                    <button className="readonbtn">READ ON</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="w-100">
                                    <button className="readlaterbtn"><img src={bookmark} style={{width: "14px", height: "14px"}} alt="bookmark" /> READ LATER</button>
                                </div>
                            </div>
                        </div>

                        </div>
                        </div>
                        <div className="carousel-item">
                        <div className="w-100 pb-5">

                        <h1 className="text-center h1-beautiful">THE SIMPLEST WAYS TO<br /> CHOOSE THE BEST COFFEE</h1>
                        <p className="text-center p-madison mt-4">Bu Madison Barnett / In Humans / 2 Comments</p>

                        <div className="row pt-3">
                            <div className="col-md-6 col-12">
                                <div className="w-100 d-flex justify-content-end">
                                    <button className="readonbtn">READ ON</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="w-100">
                                    <button className="readlaterbtn"><img src={bookmark} style={{width: "14px", height: "14px"}} alt="bookmark" /> READ LATER</button>
                                </div>
                            </div>
                        </div>

                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>

                    </div>
                </div>
            </div>

            </div>

        <div className="w-100 divBox">

        <div className="w-100 divBox2">
        <div className="container mainContainer">
                <div className="row">
                    <div className="col-12">
                        <div className="w-100 pt-3 pb-3">
                            <h6 className="h6-blogHere mt-5 pt-5">OUR BLOG HERE</h6>

                            <div className="w-100 mt-5 d-flex justify-content-center">

                            <div className="w-75">
                            {
                                data.map(item => <div className="p-3 mb-3 mt-5 animatedDiv" style={{border: '1px solid #333333'}}>
                                <a className="userId">{item.id}</a>
                                <Link style={{textDecoration: 'none'}} to={`/Details/${item.id}`} >
                                    <h3 className="text-center blogTitle"> {item.title}</h3>
                                </Link>
                                <p className="blogDescription" dangerouslySetInnerHTML={{__html:item.description}}></p>
                                <Link className="detailsBtn" to={`/Details/${item.id}`}>Details</Link>

                                <hr className="m-0 mt-4"/>
                              </div>)
                            }
                            </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <footer>
            <div className="container">
                <div className="row pb-5 mt-2">
                    <div className="col-12">
                        <div className="w-100">
                            <h4 className="brand-logo2 text-center">Blog API</h4>
                            <hr className="w-100" />
                            <p className="createdBy text-center">Created By Avtandil Saginashvili</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        </div>

        </div>



    </div>
    </React.Fragment>
    )
}

export default Dashboard;