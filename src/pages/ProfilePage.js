import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {useHistory, useLocation, Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import '../css/ProfileCSS.css';
import piodos from '../images/darwin-piodos.jpg';


function ProfilePage()
{

       
    let user= JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();

   
  
    return(
        <div className="container-fluid p-0 m-0">
                    {
                    localStorage.getItem('user-info') ?
                    <>
                <NavBar/>

               
                        
            <div className="container pt-5">
         
                <div className="card">
                  

                         
                    <div className="card-body">
                        <div className="row">

{/* I copied this online , bootstrap profile page */}

                                <div class="container emp-profile ">
                                            <form method="post">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="profile-img ">
                                                            <div  style={{ backgroundImage:`url(${"http://localhost:8000/"+ user.image})`,
                                                                backgroundPosition: 'center',
                                                                backgroundSize: 'cover',
                                                                backgroundRepeat: 'no-repeat',
                                                                position:"relative",
                                                                width:"200px",
                                                                height:"200px",
                                                                margin:"0 auto",
                                                                overflow:"hidden"}}>

                                                                <div class="file btn btn-lg btn-primary">
                                                                Change Photo
                                                                <input type="file" name="file"/>
                                                            </div>

                                                            </div>
                                                            
                                                           

                                                        </div>

                                                      
                                                        
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="profile-head">
                                                                    <h4>
                                                                        {user.firstname} {user.middlename} {user.lastname}
                                                                    </h4>
                                                                    
                                                                    <h6>
                                                                    <i class="fa solid fa-envelope me-2"></i>{user.email}
                                                                    </h6>
                                                                    <h6>
                                                                    <i class="fa solid fa-phone me-2"></i>{user.phone}
                                                                    </h6>
                                                                    <h6>
                                                                    <i class="fa solid fa-map me-2"></i>{user.address}
                                                                    </h6>
                                                                    
                                                            <ul class="nav nav-tabs pt-4" id="myTab" role="tablist">
                                                                <li class="nav-item">
                                                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">User Info</a>
                                                                </li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>


                                                    <div class="col-md-2">
                                                        <Link to ={"edituser/" + user.id}>
                                                        <button className=' btn profile-edit-btn ms-2'><i class="fa solid fa-pen me-2"></i>Edit Profile</button>
                                                        </Link>
                                                       
                                                    </div>

                                                 



                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="tab-content profile-tab" id="myTabContent">
                                                            <div class="tab-pane fade show active pt-3" id="home" role="tabpanel" aria-labelledby="home-tab">

                                                                  <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>User Id</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p># {user.id}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Name</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>{user.firstname} {user.middlename} {user.lastname}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Email</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>{user.email}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Phone</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>{user.phone}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Address</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>{user.address}</p>
                                                                            </div>
                                                                        </div>

                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Gender</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>{user.gender}</p>
                                                                            </div>
                                                                        </div>

                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Birthday</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>{user.birthmonth} {user.birthday}, {user.birthyear}</p>
                                                                            </div>
                                                                        </div>


                                                            </div>

                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>           
                                        </div>


                        </div>
                    </div>

                   
                </div>
            </div>
            
                <Footer />

            </>
            :null

            }
  
        </div>

  )
}
export default ProfilePage;