import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { gsap } from "gsap";
import Sun from "../Assets/Pics/sun.png";
import Dashboard from "../Components/Dashboard";

function Authorize() {

    // Animation GSAP 
        const animateDivRef = useRef(null);
        const animateDiv2Ref = useRef(null);
        const animateDiv3Ref = useRef(null);
        const animateDiv4Ref = useRef(null);
        const navigate = useNavigate();
      
        useEffect(() => {

            if (animateDivRef.current && animateDiv2Ref.current) {
              const tl = gsap.timeline();
        
              tl.to(animateDivRef.current, {
                x: 1300,
                rotate: 360,
                duration: 4,
              });
        
              tl.from(animateDiv2Ref.current, {
                stagger: 1,
                opacity: 0,
                visibility: 'visible',
                delay: 0.7,
                duration: 2,
              }, "-=2");

            }
          }, []);

        useEffect(() => {
    const animateDiv3 = animateDiv3Ref.current;
    const animateDiv4 = animateDiv4Ref.current;

    if ( animateDiv3 && animateDiv4 ) {
      const tl2 = gsap.timeline();

      tl2.to(animateDiv3, {
        height: 200,
        duration: 4,
        ease: 'power4.inOut',
      })
        .to(animateDiv4, {
          width: 200,
          visibility: 'visible',
          delay: 0.2,
          duration: 3,
        })
    }
          }, []);

    // Registration and Authorization

          let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          let nameRegex = /^[a-zA-Z\s']+$/;
          let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{4,}$/;

    const getRegistration = () => {
        let emailInput = document.getElementById("emailIn");
        let nameInput = document.getElementById("nameIn");
        let passwordInput = document.getElementById("passwordIn");


        axios.post("https://apitest.reachstar.io/signup", {
            email : emailInput.value,
            name : nameInput.value,
            password : passwordInput.value
        }).then(function (response) {

          })
          .catch(function (error) {
            console.log(error);
          });



        if (emailInput.value == "" || emailRegex.test(emailInput)) {
            window.alert("Please enter correct email address");
        }else if (nameInput.value == "" || nameRegex.test(nameInput)) {
            window.alert("Please enter correct name");
        }else if (passwordInput.value == "" || passwordRegex.test(passwordInput)) {
            window.alert("please enter correct password");
        }else {
            window.alert("you are Registered");
        }
        
    }

    const GetSignIn = () => {

        let emailSignIn = document.getElementById("emailSign");
        let passwordSignIn = document.getElementById("passwordSign");

        axios.post("https://apitest.reachstar.io/signin", {

            email: emailSignIn.value,
            password: passwordSignIn.value
            

        }).then(function(response) {

            if (emailSignIn.value == "" || emailRegex.test(emailSignIn)) {
                window.alert("Please enter correct email address");
            }else if (passwordSignIn.value == "" || passwordRegex.test(passwordSignIn)) {
                window.alert("please enter correct password");
            }else {
                window.alert("you are signed");
                navigate("/Dashboard");
            }
            console.log(response.status);
        }).catch(function (error) {

            if (error instanceof AxiosError){
                // console.log(error?.response?.status);
                if (error?.response?.status === 422) {
                    window.alert("მონაცემები არასწორია");
                }
            }
          });


  
        
    }
        
    

    return(
        <div className="main w-100 position-relative">
        <header className="w-100">
        <nav className="navbar navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand brand-logo" href="#">Blog API</a>
            <div className="w-100 d-flex align-items-center justify-content-between" style={{overflow: "hidden"}}>
            <img src={Sun} ref={animateDivRef} alt="sun" />
            <h1 className="animateHello" ref={animateDiv2Ref}>Hello</h1>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        </nav>
        
        </header>

        <div className="container p-5">

        <div className="row">

        {/* Registration */}

        <div className="col-5">
            <div className="w-100">

            <h1 className="h1-signup mt-5">Sign Up For Free</h1>

            <form className="forms mt-4">

            <label>Email</label>
            <input className="email-inp" type="email" id="emailIn" />
            <label className="mt-2">Name</label>
            <input type="text" id="nameIn" />
            <label className="mt-2">Password</label>
            <input type="password" id="passwordIn" />
            <button className="mt-4 signup-butt" onClick={getRegistration} type="button">Registration</button>
            </form>

            </div>
        </div>

        <div className="col-2">
            <div className="w-100 h-100 mt-3 d-flex align-items-center justify-content-between">

            <h1 className="h1-or" id="or">OR</h1>
            </div>
            <div className="w-100 d-flex justify-content-center">
            <div className="lineUnfold" ref={animateDiv4Ref}></div>
            </div>
        </div>

        <div className="col-5">
            <div className="w-100 ps-5">

            <h1 className="h1-signup mt-5">Sign In</h1>

            <form className="forms">
                <label className="mt-5">Email</label>
                <input type="email" id="emailSign" />
                <label className="mt-4">Password</label>
                <input type="password" id="passwordSign" />
                <button className="signup-butt marginbtn" onClick={GetSignIn} type="button">Sign In</button>
            </form>

            </div>
        </div>

        </div>

        </div>

        <div className="w-100 d-flex justify-content-center align-items-end position-absolute bottom-0 mb-2">
            <div className="lineUp" ref={animateDiv3Ref}></div>
        </div>

        </div>
    )
}

export default Authorize;