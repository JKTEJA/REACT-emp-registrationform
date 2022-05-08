import React,{useState} from 'react';
// import firebaseDB from './firebase'
const App = () => {
  const[data,setData]=useState({
    name:"",
    employeeid:"",
    phonenumber:""
  });
  const {name,employeeid,phonenumber}={...data}
  const changehandler =e=>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const submithandler=e=>{
    e.preventDefault();
  
    fetch("https://test-api-293d5-default-rtdb.firebaseio.com/data.json",
    {
    method:'POST',
    body:JSON.stringify(data),
    headers:{
    'Content-Type':'application/json'
    }
  }
    ).then(res =>alert('Data stored successfully')).catch(err =>console.log(err));
  
  }

  return(
 <div className="APP">
   <center>
     <h3>Employee Rigistration From</h3>
     <form onSubmit={submithandler} style={{'border':'1px solid balck'}}>
       <label>Name:</label><br/>
       <input type="text" name="name" value={name} placeholder="Name" onChange={changehandler}/><br/>
       <label>EmployeeId:</label><br/>
       <input type="text"  name="employeeid" value={employeeid} placeholder="EmployeeId" onChange={changehandler}/><br/>
       <label>PhoneNumber:</label><br/>
       <input type="text" name="phonenumber" value={phonenumber} placeholder="+91" onChange={changehandler}/><br/><br></br>
       <input className='bg bg-success text-white outlie:none' type="submit" value="login"/>
     </form>
   </center>
    </div>
  );
}

export default App;