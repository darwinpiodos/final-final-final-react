import {useHistory} from 'react-router-dom'; 
import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import swal from 'sweetalert';
window.swal = swal;



function LoginPage()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push("/profile")
        }
    },[])




    async function login()
    {
        console.warn(email, password)
        let item={email,password};
        let result= await fetch ("http://localhost:8000/api/login ",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            
            body:JSON.stringify(item)
        });

        result = await result.json();

        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/profile");

        
    if(result){
        swal({
            title: "Congratulations!",
            text: "Login Successful",
            icon: "success",
            button: "Proceed to Profile",
          }).then(function() {
            window.location = "/profile";
        })
    }
    else{

        swal({
            title: "Oops!",
            text: "Login Unsuccessful",
            icon: "warning",
            button: "Okay",
          }).then(function() {
            window.location = "/login";
        })
        
    }



    }




    return(
      
        <div className='container-fluid m-0 p-0 d-flex flex-column  align-items-center'>
              <NavBar/>

            <div className='container-fluid mt-5 pt-5  sm-w-50 w-100  d-flex flex-column align-items-center'>
                    <div className='card col-12 col-sm-12 col-md-12 col-lg-5 p-4'>
                        <h4 className='mb-3'>Login</h4>

                      

                            <div class="form-floating mb-3">
                                <input type="email" onChange={(e)=>setEmail(e.target.value)}   className="form-control  fs-6 p-2 mb-3 pt-4" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput ">Email address</label>
                            </div>

                            <div class="form-floating">
                                <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control  fs-6 p-2 mb-3 pt-4" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div>


                      

                        <div className='form-group'>
                            <button onClick={login} className='btn btn-primary w-100 fs-5 p-3'>Login</button>
                        </div>


                    </div>

            </div>
        </div>
    )
}

export default LoginPage;