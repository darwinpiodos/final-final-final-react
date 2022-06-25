import React from "react";
import NavBar from "../components/NavBar";
import Contact from "../images/contact-tracing.gif";
import Footer from "../components/Footer";
import{Link} from 'react-router-dom';
import '../css/NavBar.css';
import '../css/HomePageResponsive.css';
import {useHistory, useLocation} from 'react-router-dom';

function HomePage()
{


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


    
    return(
        <div className="container-fluid p-0 m-0">
            <NavBar />
            <div className="row p-5 homepage-container">

                <div className="col d-flex flex-column justify-content-center ms-5 mt-5 inside-container">
                    <h1 className="display-5 welcome-mlgcl">
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
                        <img src={Contact} className="image-cov"/>
                    </div>
            </div>

            <Footer />

        </div>
    )
}
export default HomePage;