import React from "react";
import NavBar from "../components/NavBar";
import Contact from "../images/contact-tracing.gif";
import Footer from "../components/Footer";
import{Link} from 'react-router-dom';
import '../css/NavBar.css';

function HomePage()
{


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
            <div className="row p-5">
                <div className="col d-flex flex-column justify-content-center ms-5 mt-5">
                    <h1 className="display-5">
                        Welcome to MLGCL COVID-19 Contact Tracing System!
                    </h1>

                    <h6 className="subhead mt-2">
                        MLGCL COVID-19 Contact Tracing System is the MLGCL's unofficial contact tracing system. We aim to manage the spread of COVID-19 to keep our students, instructors and staffs safe and healthy.
                    </h6>

                    {/* logincontainer */}
                    <div className="logincontainer mt-3" id="logincontainer">

                        <h6>
                            I'd like to <span className="fw-bold" style={{color:"#06ABD5"}}>login</span> as an
                        </h6>

                        <div className="mt-3">
                            <Link to="/login">
                            <button className="btn " style={{ backgroundColor: "#abe9cd", backgroundImage: "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)", color:"white",padding:"8px 40px", borderRadius:"50px"}}>Individual</button>
                            </Link>

                            <Link to="/login">
                            <button className="btn ms-3" style={{ backgroundColor: "#abe9cd", backgroundImage: "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)", color:"white",padding:"8px 40px", borderRadius:"50px"}}>Admin</button>
                            </Link>
                        </div>
                     

                        <h6 className="mt-4">
                            Don't have an account yet? <span className="fw-bold" style={{color:"#06ABD5", cursor:"pointer"}} onClick={registerbutton}>Register Now</span>
                        </h6>

                    </div>


                    {/* registercontainer */}
                    <div className="registercontainer mt-5" id="registercontainer">
                                
                    <h6>
                            I'd like to <span className="fw-bold" style={{color:"#06ABD5"}}>register</span> as an
                        </h6>

                        <div className="mt-3">
                            <Link to="/register">
                            <button className="btn register-btn" style={{outline:"1px solid #abe9cd ", color:"white",padding:"8px 40px", borderRadius:"50px", color:"#3eadcf"}}>Individual</button>
                            </Link>

                            <Link to="/register">
                            <button className="btn ms-3 register-btn" style={{outline:"1px solid #abe9cd ", color:"white",padding:"8px 40px", borderRadius:"50px", color:"#3eadcf"}}>Admin</button>
                            </Link>
                        </div>
                     

                        <h6 className="mt-4">
                            Already have an account? <span className="fw-bold" style={{color:"#06ABD5", cursor:"pointer"}} onClick={loginbutton}>Login Now</span>
                        </h6>


                    </div>

    
                    </div>
                        <div className="col mt-5 pt-5 overflow">
                        <img src={Contact} />


                </div>
            </div>

            <Footer />

        </div>
    )
}
export default HomePage;