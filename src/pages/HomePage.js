import React from "react";
import NavBar from "../components/NavBar";
import Contact from "../images/contact-tracing.gif";
import Footer from "../components/Footer";

function HomePage()
{
    return(
        <div className="container-fluid p-0 m-0">
            <NavBar />
            <div className="row">
                <div className="col d-flex flex-column justify-content-center ms-5 mt-5">
                    <h1 className="">
                        Welcome to MLGCL COVID-19 Contact Tracing System!
                    </h1>

                    <h6 className="subhead mt-2">
                        MLGCL COVID-19 Contact Tracing System is the MLGCL's unofficial contact tracing system. We aim to manage the spread of COVID-19 to keep our students, instructors and staffs safe and healthy.
                    </h6>

                    {/* logincontainer */}
                    <div className="logincontainer mt-3">

                        <h6>
                            I'd like to <span className="fw-bold text-primary">login</span> as an
                        </h6>

                        <div className="mt-3">
                            <button className="btn btn-primary">Individual</button>

                            <button className="btn btn-primary">Admin</button>
                        </div>

                        <h6 className="mt-4">
                            Don't have an account yet? <span className="fw-bold text-primary" >Register Now</span>
                        </h6>

                    </div>


                    {/* registercontainer */}
                    <div className="registercontainer">
                                
                        <h3>
                            I'd like to <span>login</span> as an
                        </h3>

                        <div>
                            <button className="btn btn-primary" >Individual</button>
                            <button className="btn btn-primary" >Admin</button>
                        </div>

                        <h4>
                            Don't have an account yet? <span>Register Now</span>
                        </h4>

                    </div>

    
                    </div>
                        <div className="col mt-5 overflow">
                        <img src={Contact} />


                </div>
            </div>

            <Footer />

        </div>
    )
}
export default HomePage;