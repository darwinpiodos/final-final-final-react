import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {useHistory, useLocation} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import '../css/ProfileCSS.css';
import piodos from '../images/darwin-piodos.jpg';


function ProfilePage()
{

       
    let user= JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();

   
  
    return(
        <div className="container-fluid p-0 m-0">
                <NavBar/>
            <div className="container pt-5">
         
                <div className="card">
                {
                    localStorage.getItem('user-info') ?
                    <>
                            <h1>{user.firstname}</h1>

                            </>
                            :null

                }
                    <div className="card-body">
                        <div className="row">

{/* I copied this online , bootstrap profile page */}

                                <div class="container emp-profile ">
                                            <form method="post">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="profile-img">
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                                                            <div class="file btn btn-lg btn-primary">
                                                                Change Photo
                                                                <input type="file" name="file"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="profile-head">
                                                                    <h5>
                                                                        Kshiti Ghelani
                                                                    </h5>
                                                                    <h6>
                                                                        Web Developer and Designer
                                                                    </h6>
                                                                    
                                                            <ul class="nav nav-tabs pt-4" id="myTab" role="tablist">
                                                                <li class="nav-item">
                                                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
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
                                                                                <p>Kshiti123</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Name</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>Darwin Piodos</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Email</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>kshitighelani@gmail.com</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Phone</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>123 456 7890</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Profession</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>Web Developer and Designer</p>
                                                                            </div>
                                                                        </div>


                                                            </div>
                                                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Experience</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>Expert</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Hourly Rate</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>10$/hr</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Total Projects</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>230</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>English Level</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>Expert</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <label>Availability</label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <p>6 months</p>
                                                                            </div>
                                                                        </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <label>Your Bio</label><br/>
                                                                        <p>Your detail description</p>
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
        </div>
    )
}
export default ProfilePage;