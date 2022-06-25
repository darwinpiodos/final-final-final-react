import React from "react";
import mlglogo from '../images/mlg-logo.png';
import '../App.css';
import { Link, useHistory } from "react-router-dom";
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import userEvent from '@testing-library/user-event';
import '../css/NavBar.css';





function NavBar()
{


    
    let user= JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();
    

    function logOut()
    {
        localStorage.clear();
        history.push('/')
        window.location = "/";

    }


    
    function profile()
    {
      
        history.push('/profile')  
        window.location = "/profile";  

    }



    return(
        <div className="container-fluid p-0 m-0 w-100">
            <nav class="navbar navbar-expand-lg navbar-light p-3 box-shadow w-100 " style={{ backgroundColor: "#ffffff",
            backgroundImage: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)"}}>


            
                <div class="container-fluid p-3 " >
                <a class="navbar-brand" href="/"><img className="mlg-logo" src={mlglogo}/></a>
               

                  
                        
                    <a class="navbar-brand logo-name" style={{color:"#485356  "}}  href="/">MLGCL<br></br><span className="covid-name">COVID-19 CONTACT TRACING SYSTEM</span></a>
                  

                    

                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse links-right " id="navbarNav">
                    <ul class="navbar-nav align-button nav-bar-container " style={{position:"absolute", right:"10px",padding:"20px", display:"flex"}}>
                       

                      
                    {
                    localStorage.getItem('user-info') ?
                    <>
                        <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                      
                        </li>
                        
                        <li class="nav-item">
                        <a class="nav-link" href="/list">List</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" href="/profile">Profile</a>
                        </li>
                    </>
                    :
                    <>

                        <li class="nav-item" style={{textDecoration:'none'}}>
                        <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/register">Register</a>
                        </li>

                    </>

                    }


                    
                        {
                        localStorage.getItem('user-info') ?    
                    
                        <li>
                        <Navbar >
                            <Nav className="NavBar">
                                <NavDropdown title={user && user.firstname} className="btn simple-button">
                                <NavDropdown.Item className="dropdown-item" onClick={profile}>Profile</NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-item" onClick={logOut}>Logout</NavDropdown.Item>
                               
                                </NavDropdown>
                            </Nav>
                        </Navbar>

                               


                        </li>



                        :null
                        
                        }
                    
                      
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;