import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../css/ProfileCSS.css';


function List()
{


    const [data,setData]=useState([]);
    useEffect (  ()=>{
       getData();
    },[])
   

    async function deleteOperation(id)
    {
        let result= await fetch("http://localhost:8000/api/delete/" +id,{
            method:'DELETE'
        });

        result = await  result .json();
        console.warn(result);
        getData(); 
    }

    async function getData(){
        let result= await fetch("http://localhost:8000/api/list");
        result= await result.json();
        setData(result)

    }

    return(
        <div className="container-fluid m-0 p-0">
            <NavBar/>
                <div className="container-fluid p-5">
                    <div className="card">
                        <div className="card-header d-flex align-item-center p-4">
                            <h4 className="">User list</h4>
                            <Link to="/add">
                            <button className="btn profile-edit-btn ms-4"><i class="fa solid fa-plus me-2"></i>Add User</button>
                            </Link>

                           


                        </div>

                        <div className="card-body p-5" style={{overflowX:"auto", padding:"10px"}}>
                        <table className="table  table-responsive" style={{fontSize:"12px", padding:"10px"}} >

                        <thead>
                            <tr>
                            <th scope="col">User ID #</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Address</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody> 

                            {

                            data.map((item)=>

                            <tr className="">
                            <th scope="row">{item.id}</th>
                            <td>{item.firstname} {item.middlename} {item.lastname}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>{item.birthmonth} {item.birthday}, {item.birthyear}</td>
                            <td><img style={{width:80,height:80}} src={"http://localhost:8000/" + item.image} /></td>

                            <td className="float">
                                <button onClick={()=>deleteOperation(item.id)} className='btn list-delete-button'><i class="fa solid fa-trash me-2"></i></button>

                                

                                <Link to ={"edituser/" + item.id}>
                                    <button className=' btn list-edit-button ms-3'><i class="fa solid fa-pen me-2"></i></button>
                                </Link>

                            </td>

                            
                        

                                
                            </tr>

                            
                            ) 
                            }
                        </tbody>
                    </table>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}
export default List;