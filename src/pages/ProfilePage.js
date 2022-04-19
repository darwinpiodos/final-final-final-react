import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {useHistory, useLocation} from 'react-router-dom';
import React, {useState, useEffect} from 'react';


function ProfilePage()
{

   
    
    let user= JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();


    return(
        <div className="container-fluid p-0 m-0">
                <NavBar/>
            <div className="container">
                <div className="card">
             
                    <div className="card-body">
                        <div className="row">
                            <div className="col">

                                
                              
                                
                                <div style={{ backgroundImage:`url(${"http://localhost:8000/" + user.image})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                position:"relative",
                                width:120,
                                height:120}}>
                                </div>
                                
                                 
                            </div>
                         
                            <div className="col">
                                    <h1 className="bg-primary">{user && user.firstname}</h1>
                            </div>
                           
                        </div>
                    </div>

                   
                </div>
            </div>
                <Footer />
        </div>
    )
}
export default ProfilePage;