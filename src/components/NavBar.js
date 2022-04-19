import React from "react";
import mlglogo from '../images/mlg-logo.png';
import '../App.css';
import { Link, useHistory } from "react-router-dom";
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import userEvent from '@testing-library/user-event';


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
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-3 box-shadow w-100">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img className="mlg-logo" src={mlglogo}/></a>
                    <a class="navbar-brand logo-name" href="#">MLGCL<br></br><span className="covid-name">COVID-19 CONTACT TRACING SYSTEM</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse links-right" id="navbarNav">
                    <ul class="navbar-nav">
                       

                      
                    {
                    localStorage.getItem('user-info') ?
                    <>
                        <li class="nav-item">
                        <Link to="/">
                        <a class="nav-link" href="#">Home</a>
                        </Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/profile">
                        <a class="nav-link" href="#">Profile</a>
                        </Link>
                        </li>
                    </>
                    :
                    <>

                        <li class="nav-item">
                        <Link to="/login">
                        <a class="nav-link" href="#">Login</a>
                        </Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/register">
                        <a class="nav-link" href="#">Register</a>
                        </Link>
                        </li>

                    </>

                    }


                    
                        {
                        localStorage.getItem('user-info') ?    
                    

                        <Navbar>
                            <Nav>
                                <NavDropdown title={`user-info`} className="btn btn-primary" style={{color:"white"}}>
                                <NavDropdown.Item className="dropdown-item"onClick={logOut}>Logout</NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-item"onClick={profile}>Profile</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar>

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