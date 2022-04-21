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
    }

    function profile()
    {
      
        history.push('/profile')    


    }



    return(
        <div className="container-fluid p-0 m-0 w-100">
            <nav class="navbar navbar-expand-lg navbar-light p-3 box-shadow w-100" style={{ backgroundColor: "#ffffff",
            backgroundImage: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)"}}>


            
                <div class="container-fluid p-3" >
                <Link to="/"><a class="navbar-brand" href="#"><img className="mlg-logo" src={mlglogo}/></a>
                </Link>

                    <Link to="/" className="mlg-name" >
                    <a class="navbar-brand logo-name" style={{color:"#485356  "}}  href="#">MLGCL<br></br><span className="covid-name">COVID-19 CONTACT TRACING SYSTEM</span></a>
                    </Link>

                    

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse links-right" id="navbarNav">
                    <ul class="navbar-nav align-button" style={{position:"absolute", right:"10px",padding:"20px", display:"flex"}}>
                       

                      
                    {
                    localStorage.getItem('user-info') ?
                    <>
                        <li class="nav-item">
                        <Link to="/" style={{textDecoration:'none'}}>
                        <a class="nav-link" href="#">Home</a>
                        </Link>
                        </li>
                        
                        <li class="nav-item">
                        <Link to="/list" style={{textDecoration:'none'}}>
                        <a class="nav-link" href="#">List</a>
                        </Link>
                        </li>

                        <li class="nav-item">
                        <Link to="/profile" style={{textDecoration:'none'}}>
                        <a class="nav-link" href="#">Profile</a>
                        </Link>
                        </li>
                    </>
                    :
                    <>

                        <li class="nav-item" style={{textDecoration:'none'}}>
                        <Link to="/login" style={{textDecoration:'none'}}>
                        <a class="nav-link" href="#">Login</a>
                        </Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/register" style={{textDecoration:'none'}}>
                        <a class="nav-link" href="#">Register</a>
                        </Link>
                        </li>

                    </>

                    }


                    
                        {
                        localStorage.getItem('user-info') ?    
                    
                        <li>
                        <Navbar>
                            <Nav className="NavBar">
                                <NavDropdown title={user && user.firstname} className="btn simple-button" style={{color:"white"}}>
                                <NavDropdown.Item className="dropdown-item" onClick={logOut}>Logout</NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-item" onClick={profile}>Profile</NavDropdown.Item>
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