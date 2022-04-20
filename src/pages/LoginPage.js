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
        history.push("/profile")
    }



    return(
      
        <div className='container-fluid m-0 p-0 d-flex flex-column  align-items-center'>
              <NavBar/>

            <div className='container m-5 p-5  sm-w-50 w-80 d-flex flex-column                align-items-center'>
                    <div className='card col-12 col-sm-12 col-md-12 col-lg-6 p-3'>
                        <h1 className='mb-3'>Login</h1>
                        <div className='form-group'>
                            <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="enter email" className='form-control fs-6 p-2 mb-3'></input>
                        </div>

                        <div className='form-group'>
                            <input type="password"  onChange={(e)=>setPassword(e.target.value)}  placeholder="enter password" className='form-control fs-6 p-2 mb-3'></input>
                        </div>

                        <div className='form-group'>
                            <button onClick={login} className='btn btn-primary w-100 fs-6 p-2'>Login</button>
                        </div>


                    </div>

            </div>
        </div>
    )
}

export default LoginPage;