
import NavBar from '../components/NavBar';
import React, {Component, useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import Footer from '../components/Footer';
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';
window.swal = swal;


class EditUser extends Component
{

    state = {

            firstname: '',
            lastname: '',
            middlename: '',
            email: '',
            password: '',
            gender: '',
            birthmonth: '',
            birthday: '',
            birthyear: '',
            phone: '',
            address: '',
            image: '',
    }
   
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

     async componentDidMount() {
        const user_id= this.props.match.params.id;
        console.log(user_id);
        const res= await axios.get(`http://localhost:8000/api/edit/${user_id}`);
        if (res.data.status === 200)
        {
            this.setState({
                firstname: res.data.student.firstname,
                lastname: res.data.student.lastname,
                middlename: res.data.student.middlename,
                email: res.data.student.email,
                password: res.data.student.password,
                gender: res.data.student.gender,
                birthmonth: res.data.student.birthmonth,
                birthday: res.data.student.birthday,
                birthyear: res.data.student.birthyear,
                phone: res.data.student.phone,
                address: res.data.student.address,
                image: res.data.student.image,
            });
        }
    }



    updateUser = async  (e) => {
        e.preventDefault();

        const user_id= this.props.match.params.id;
        const res = await axios.put(`http://localhost:8000/api/update/${user_id}`, this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({

                firstname: '',
                lastname: '',
                middlename: '',
                email: '',
                password: '',
                gender: '',
                birthmonth: '',
                birthday: '',
                birthyear: '',
                phone: '',
                address: '',
                image: '',

                
            });


            swal({
                title: "Congratulations!",
                text: "Edit Successful",
                icon: "success",
                button: "Proceed to Profile",
              }).then(function() {
                window.location = `/edituser/${user_id}`;
            });


        }
    }



        
    render()
    {
         return(

            <div className='container-fluid m-0 p-0'>
                <NavBar/>
                <div className='container w-100 pt-5 mt-5 d-flex align-items-center justify-content-center'>


                <div className='card w-50 p-3 width-cardd' >
                    
                        <h4 className='pt-3 ms-3'>Edit User <i class="fa solid fa-pen ms-2"></i></h4>
                   
                    <div className='card-body'>
  
                        <form onSubmit={this.updateUser}>

                       
                            <div class="form-floating mb-3">
                                <input type="text"   name="firstname" onChange={this.handleInput} value={this.state.firstname}  className="form-control  fs-6 p-2 mb-4 pt-5 pb-3"  id="floatingInput" />
                                <label for="floatingInput ">Email address</label>
                            </div>


                          
                            <div class="form-floating mb-3">
                                <input type="text"   name="middlename" onChange={this.handleInput} value={this.state.middlename}  className="form-control  fs-6 p-2 mb-4 pt-5 pb-3"  id="floatingInput" />
                                <label for="floatingInput ">Middle Name</label>
                            </div>



                            <div class="form-floating mb-3">
                                <input type="text"   name="lastname" onChange={this.handleInput} value={this.state.lastname}  className="form-control  fs-6 p-2 mb-4 pt-5 pb-3"  id="floatingInput" />
                                <label for="floatingInput ">Last Name</label>
                            </div>


                            {/* <div className='form-group mb-3'>
                                <label>password</label>
                                <input type="password" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" />
                            </div> */}

                          
                            <div class="form-floating mb-3">
                                <input type="text"   name="gender" onChange={this.handleInput} value={this.state.gender}  className="form-control  fs-6 p-2 mb-4 pt-5 pb-3"  id="floatingInput" />
                                <label for="floatingInput ">Gender</label>
                            </div>


                            <h6 className='pt-3 ms-2'>Birthday </h6>
                            <div className='d-flex'> 

                                <div class="form-floating m-2" style={{width:"50%"}}>
                                    <input type="text"   name="birthmonth" onChange={this.handleInput} value={this.state.birthmonth}  className="form-control  fs-6 p-2 mb-4 pt-5 pb-3"  id="floatingInput" />
                                    <label for="floatingInput ">Month</label>
                                </div>
                                
                                <div class="form-floating m-2" style={{width:"20%"}}>
                                    <input type="text"   name="birthday" onChange={this.handleInput} value={this.state.birthday}  className="form-control  fs-6 p-2 mb-4 pt-5 pb-3"  id="floatingInput" />
                                    <label for="floatingInput ">Day</label>
                                </div>
                            
                                <div class="form-floating m-2" style={{width:"30%"}}>
                                    <input type="text"   name="birthyear" onChange={this.handleInput} value={this.state.birthyear}  className="form-control  fs-6 p-2 mb-4 pt-5 pb-3"  id="floatingInput" />
                                    <label for="floatingInput ">Year</label>
                                </div>
                            
                            </div> 

                           
                            <div class="form-floating mb-3">
                                <input type="text"   name="phone" onChange={this.handleInput} value={this.state.phone}  className="form-control  fs-6 p-2 mb-4 pt-5 pb-3"  id="floatingInput" />
                                <label for="floatingInput ">Mobile Number</label>
                            </div>


                            <div class="form-floating mb-3">
                                <input type="text"   name="address" onChange={this.handleInput} value={this.state.address}  className="form-control  fs-6 p-2 mb-4 pt-5 pb-3"  id="floatingInput" />
                                <label for="floatingInput ">Address</label>
                            </div>


                            <div className='form-group'>
                                <button onSubmit={this.updateUser} className='btn w-100 fs-5 p-3 mt-2' style={{ backgroundColor: "#abe9cd", backgroundImage: "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)", color:"white"}}>Update</button>
                            </div>


                        </form>


                    </div>
                </div>

                </div>

                <Footer/>
            </div>
         )
    }



}

export default EditUser;
