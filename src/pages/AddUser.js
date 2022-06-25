import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useHistory,useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import '../App.css';
window.swal = swal;

function AddUser() {

    



    const history=useHistory();
    const [firstname, setfirstName] = useState("")
    const [lastname, setlastName] = useState("")
    const [middlename, setmiddleName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [birthmonth, setMonth] = useState("")
    const [birthday, setDay] = useState("")
    const [birthyear, setYear] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [image, setImage] = useState("")



  

    async function signUp() {
        console.warn(
            firstname,
            middlename,
            lastname,
            email,
            password,
            gender,
            birthmonth,
            birthday,
            birthyear,
            phone,
            address,
            image
        )


        const formData = new FormData();
        formData.append('image', image);
        formData.append('firstname', firstname);
        formData.append('middlename', middlename);
        formData.append('lastname', lastname);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('gender', gender);
        formData.append('birthmonth', birthmonth);
        formData.append('birthday', birthday);
        formData.append('birthyear', birthyear);
        formData.append('phone', phone);
        formData.append('address', address);

        let result = await fetch(`http://localhost:8000/api/register`, {
            method: 'POST',
            body: formData
          
            
        });

      
        
   
        let item={email,password};
        let res= await fetch ("http://localhost:8000/api/login ",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            
            body:JSON.stringify(item)
        });

        res = await res.json();

        if(res){
            swal({
                title: "Good job!",
                text: "You have successfully added a new user",
                icon: "success",
                button: "Go to User List",
              }).then(function() {
                window.location = "/list";
            });
        };
    }

    return (
        <div className="container-fluid m-0 p-0 d-flex flex-column justify-content-center align-items-center">
            <NavBar />
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="card m-5 w-50 width-cardd" >


                    
                    <div className="card-header" style={{backgroundColor: "#abe9cd", backgroundImage:" linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"}}>
                        <h4 className='p-3'>Add User <i class="fa solid fa-plus ms-2"></i></h4>
                    </div>







                    <div className="card-body">

                    <h5 className='mb-1 ms-3 mt-4 '>Basic Information</h5>
                        <section className='d-flex'>
                            <div className='form-group m-3' style={{ width: "50%" }}>
                                <label className='form-label fs-6'>First Name</label>
                                <input type="text" onChange={(e) => setfirstName(e.target.value)} className="form-control fs-6 p-2" placeholder="enter firstname" name="firstname" required ></input>
                            </div>

                            <div className='form-group m-3' style={{ width: "50%" }}>
                                <label className='form-label fs-6'>Middle Name</label>
                                <input type="text" onChange={(e) => setmiddleName(e.target.value)} className="form-control fs-6 p-2" placeholder="enter middlename (optional)" name="middlename" ></input>
                            </div>

                        </section>

                        <section className='form-group m-3 mt-0'>
                            <label className='form-label fs-6 '>Last Name</label>
                            <input type="text" name="lastname" onChange={(e) => setlastName(e.target.value)} className="form-control fs-6 p-2" placeholder="enter lastname"></input>

                        </section>



                        <section className='form-group m-3'>
                            <label className='form-label fs-6'>Email</label>
                            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} className="fs-6 form-control p-2" placeholder="enter email" ></input>
                            <small style={{ color: "#0497e0", fontSize: "12px" }}>Make sure your email address is correct.</small>


                        </section>


                        <section className='form-group m-3'>
                            <label className='form-label fs-6'>Password</label>
                            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control p-2 fs-6" placeholder="enter password"></input>
                        </section>

                            <section className='form-group m-3'>
                                <label className='form-label fs-6'>Gender</label>
                                <input type="text" name="gender" onChange={(e) => setGender(e.target.value)} className="form-control p-2 fs-6" placeholder="enter gender"></input>
                            </section>





                            <h5 className='mb-1 ms-3 mt-5 '>Birthday</h5>
                        <div className='d-flex'>
                            
                            <section className='form-group m-3'style={{width:"50%"}}>
                                <label className='form-label fs-6'>Month</label>
                                <input type="text" name="birthmonth" onChange={(e) => setMonth(e.target.value)} className="form-control p-2 fs-6" placeholder="enter month"></input>
                            </section>

                            <section className='form-group m-3' style={{width:"20%"}}>
                                <label className='form-label fs-6'>Day</label>
                                <input type="text" name="birthday" onChange={(e) => setDay(e.target.value)} className="form-control p-2 fs-6" placeholder="enter day"></input>
                            </section>

                        <section className='form-group m-3' style={{width:"30%"}}>
                            <label className='form-label fs-6'>Year</label>
                            <input type="text" name="birthyear" onChange={(e) => setYear(e.target.value)} className="form-control p-2 fs-6" placeholder="enter year"></input>
                        </section>

                        </div>


                       

                       


                        <div className='form-group m-3'>
                        <label className='form-label fs-6'>Mobile Number</label>
                            <input name="phone" type="text"  onChange={(e) => setPhone(e.target.value)} className="form-control fs-6 p-2" placeholder="enter primary number"></input>
                            <small style={{ color: "#0497e0", fontSize: "10px" }}>Please input your correct mobile number.</small>
                        </div>


                        <div className='form-group m-3 mb-5'>
                            <label className='form-label fs-6'>Complete Address</label>
                            <input type="text" name="address"  onChange={(e) => setAddress(e.target.value)} className="form-control fs-6 p-2" placeholder="enter current address"></input>
                        </div>


                        <div className="form-group">
                            <div className='card'>
                            <div className='card-header'  style={{backgroundColor: "#abe9cd", backgroundImage:" linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"}}>
                            <p className='text-center fs-6 p-0 mt-3 text-dark'>PHOTO OF FACE</p>
                            </div>
                                <div className='card-body p-5'>

                                    <div className='text-center fs-6 p-2'>
                                        Please upload latest photo of your face
                                    </div>

                                    <div className='card-body'>
                                        <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} className="form-control fs-6  p-2 text-center"></input>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='form-group mt-4'>
                                <button  onClick={signUp}  className='btn w-100 fs-5 p-3 mt-2' style={{ backgroundColor: "#abe9cd", backgroundImage: "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)", color:"white"}}>Add</button>
                        </div>




                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default AddUser;


