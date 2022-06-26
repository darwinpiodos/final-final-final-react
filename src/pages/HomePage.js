import React from "react";
import NavBar from "../components/NavBar";
import Contact from "../images/contact-tracing.gif";
import PlayButton from "../images/playbutton.gif";
import Footer from "../components/Footer";
import{Link} from 'react-router-dom';
import '../css/NavBar.css';
import '../css/HomePageResponsive.css';
import {useHistory, useLocation} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';

import  { useState } from 'react';


function HomePage()
{




    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    



    const history=useHistory();


    function logincontainer()
    {
     
        history.push("/login")
        window.location = "/login";

    }



    function registercontainer()
    {
     
        history.push("/register")
        window.location = "/register";

    }


           






    let user= JSON.parse(localStorage.getItem('user-info'))
    

    function registerbutton() {
        document.getElementById("registercontainer").style.display ="block";
        document.getElementById("logincontainer").style.display ="none";
      }

      function loginbutton() {
        document.getElementById("logincontainer").style.display ="block";
        document.getElementById("registercontainer").style.display ="none";
      }





      function displayplaybutton() {
        document.getElementById("play-button").style.display ="block";
        document.getElementById("image-cov").style.opacity =0.3;
        // document.getElementById("logincontainer").style.display ="none";
      }

    




    return(
        <div className="container-fluid p-0 m-0">
            <NavBar />


            <div className="row p-5 homepage-container">

                <div className="col d-flex flex-column justify-content-center ms-5 mt-5 inside-container">
                    <h1 className="display-5  welcome-mlgcl">
                        Welcome to MLGCL COVID-19 Contact Tracing System!
                    </h1>

                    <h6 className="subhead mt-4 mlgcl-covid-details">
                        MLGCL COVID-19 Contact Tracing System is the MLGCL's unofficial contact tracing system. We aim to manage the spread of COVID-19 to keep our students, instructors and staffs safe and healthy.
                    </h6>

                    {/* logincontainer */}
                    <div className="logincontainer mt-4" id="logincontainer">

                        <h6 className="id-like">
                            I'd like to <span className="fw-bold" style={{color:"#06ABD5"}}>login</span> as an
                        </h6>

                        <div className="mt-4 mb-4 button-login">



                            <Link  onClick={logincontainer}>
                            <button className="btn logincontainerhover button-edit-individual">Individual</button>
                            </Link>

                            <Link onClick={logincontainer}>
                            <button className="btn ms-3 logincontainerhover button-edit-admin">Admin</button>
                            </Link>




                        </div>
                     

                        <h6 className="mt-4 center-account">
                            Don't have an account yet? <span className="fw-bold" style={{color:"#06ABD5", cursor:"pointer"}} onClick={registerbutton}>Register Now</span>
                        </h6>

                    </div>






                    {/* registercontainer */}
                    <div className="registercontainer mt-5" id="registercontainer">
                                
                    <h6 className="id-like">
                            I'd like to <span className="fw-bold" style={{color:"#06ABD5"}}>register</span> as an
                        </h6>

                        <div className="mt-4 mb-4 button-login">
                            <Link onClick={registercontainer}>
                            <button className="btn register-btn registercontainerhover button-edit-individual" >Individual</button>
                            </Link>

                            <Link onClick={registercontainer}>
                            <button className="btn ms-3 register-btn registercontainerhover button-edit-admin">Admin</button>
                            </Link>
                        </div>
                     

                        <h6 className="mt-4  center-account">
                            Already have an account? <span className="fw-bold" style={{color:"#06ABD5", cursor:"pointer"}} onClick={loginbutton}>Login Now</span>
                        </h6>


                    </div>

    
                    </div>
                        <div className="col mt-5 pt-5 overflow image-covid">


                        <img onClick={handleShow}   src={Contact} className="image-cov" id="image-cov"/>

                        <p  onClick={handleShow}  className="text-center fs-7 font-italic how-does"> <i class="fa solid fa-play color-button" ></i> How does contact tracing works?</p>

                        <img   onClick={handleShow}  src={PlayButton} className="play-button" id="play-button"/>

                         </div>
                    </div>






            <>
    

      <Modal className="darwin" show={show} onHide={handleClose} keyboard="False" centered size="lg">
        <iframe class="iframe-video"width="800" height="470" src="https://www.youtube.com/embed/uaclvunMMcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal>
    </>
  
  





            <Footer />

        </div>
    )
}
export default HomePage;