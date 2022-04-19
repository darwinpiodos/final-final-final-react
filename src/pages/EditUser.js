
import NavBar from '../components/NavBar';
import React, {Component, useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import Footer from '../components/Footer';
import '../App.css';
import axios from 'axios';


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
        }
    }



        
    render()
    {
         return(

            <div className='container-fluid m-0 p-0'>
                <NavBar/>
                <div className='container w-50 pt-5 mt-5'>
                <div className='card'>
                    <div className='card-header'>
                        <h4>Edit User</h4>
                    </div>
                    <div className='card-body'>
  
                        <form onSubmit={this.updateUser}>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>middlename</label>
                                <input type="text" name="middlename" onChange={this.handleInput} value={this.state.middlename} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>lastname</label>
                                <input type="text" name="lastname" onChange={this.handleInput} value={this.state.lastname} className="form-control" />
                            </div>

                            {/* <div className='form-group mb-3'>
                                <label>password</label>
                                <input type="password" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" />
                            </div> */}

                            <div className='form-group mb-3'>
                                <label>gender</label>
                                <input type="text" name="gender" onChange={this.handleInput} value={this.state.gender} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>month</label>
                                <input type="text" name="birthmonth" onChange={this.handleInput} value={this.state.birthmonth} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>day</label>
                                <input type="text" name="birthday" onChange={this.handleInput} value={this.state.birthday} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>year</label>
                                <input type="text" name="birthyear" onChange={this.handleInput} value={this.state.birthyear} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>phone</label>
                                <input type="text" name="phone" onChange={this.handleInput} value={this.state.phone} className="form-control" />
                            </div>

                           
                            <div className='form-group mb-3'>
                                <label>address</label>
                                <input type="text" name="address" onChange={this.handleInput} value={this.state.address} className="form-control" />
                            </div>

                           

                            <div className='form-group'>
                                <button onSubmit={this.updateUser} className='btn btn-primary w-100'>Update</button>
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
