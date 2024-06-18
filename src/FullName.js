import React,{useState} from 'react';

const FullName=()=>{
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[clicked,setClicked]=useState(false);
    const handleClick=(e)=>{
        e.preventDefault();
        setClicked(!clicked);
    }
    return(
        <>
        <h2>Full Name Display</h2>
        <form onSubmit={handleClick}>
         <label>First Name: </label>
         <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} required/><br></br>
         <label>Last Name: </label>
         <input type="text" onChange={(e)=>{setLastName(e.target.value)}} required/><br></br>
         <button>Submit</button>
         
         {(clicked)&& (firstName!=="" && lastName!=="")?(<><p>Full Name: <span>{firstName+" "+lastName}</span></p></>):(<></>) }

        </form>
        
        </>
    )
}
export default FullName;

//{(clicked)&& (firstName!=="" && lastName!=="")?(<><p>Full Name: <span>{firstName+" "+lastName}</span></p></>):(<></>) }