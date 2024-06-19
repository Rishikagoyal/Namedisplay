import React,{useState} from 'react';

const FullName=()=>{
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[show,setShow]=useState(false);
    const showText=(e)=>{
        e.preventDefault();
        setShow(true);
    }

    const handleChange=(e)=>{
        if(e.target.name==='firstName')
            {
                setFirstName(e.target.value);
            }
        else{
            setLastName(e.target.value);
        }
    }

    return(
        <>
        <div>
        <h2>Full Name Display</h2>
        <form onSubmit={showText}>
         <label>First Name: </label>
         <input type="text" name="firstName" value={firstName} onChange={handleChange} required/><br></br>
         <label>Last Name: </label>
         <input type="text" name="lastName" value={lastName} onChange={handleChange} required/><br></br>
         <button type="submit">Submit</button>
         
         

        </form>
        {show && (<p>Full Name: {firstName} {lastName}</p>)}
        </div>
       
        
        </>
    )
}
export default FullName;

