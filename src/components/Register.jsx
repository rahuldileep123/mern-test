import React, { useState } from 'react'
import { registerApi } from '../../services/allAPI';
import { useNavigate } from 'react-router-dom';

function Register() {
 const navigate = useNavigate()
  const [studentDetails,setStudentDetail]=useState({firstname:"",lastname:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""})
console.log(studentDetails);

const handleRegister=async(e)=>{
  e.preventDefault()
const {firstname,lastname,address,email,gender,mobile,password,dob,course} =studentDetails

if(firstname && lastname && address && email && gender && mobile && password && dob && course){
   try{
    const result= await registerApi(studentDetails)
    console.log(result);
    if(result?.status==200){
      alert(`${result?.data?.firstname} is successfully registered`)
      setStudentDetail({firstname:"",lastname:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""})
      
      navigate('/students')
      
    }else{
      alert(`${result?.response?.data}`)
      setStudentDetail({firstname:"",lastname:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""})
    }
   }catch(err){
    console.log(err);
  }

   
}else{
  alert("please fill the form completely")
}
}
const handleCancel=(e)=>{
  e.preventDefault()
  setStudentDetail({firstname:"",lastname:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""})
}


  return (
    <>
      <div style={{ width: "90%", height: "90%" }} className="text-center bg-light rounded">
        <h1>Apply As a Student</h1>
        <form action="">
          <div className="row p-3">
            <div className="col-lg-6">
              <label for="firstName" className="form-label mt-2 ms-0">First Name</label>
              <input value={studentDetails.firstname} onChange={e=>setStudentDetail({...studentDetails,firstname:e.target.value})} type="text" className="form-control" id="firstName" placeholder="Enter First Name"></input>

              <label for="lastName" className="form-label mt-2 ms-auto">Last Name</label>
              <input value={studentDetails.lastname} onChange={e=>setStudentDetail({...studentDetails,lastname:e.target.value})} type="text" className="form-control" id="lastName" placeholder="Enter Last Name"></input>

              <label for="exampleTextarea" class="form-label mt-2">Address</label>
              <textarea value={studentDetails.address} onChange={e=>setStudentDetail({...studentDetails,address:e.target.value})} class="form-control" id="exampleTextarea" rows="2"></textarea>

              <label for="email" className="form-label mt-2 ms-0">Email</label>
              <input value={studentDetails.email} onChange={e=>setStudentDetail({...studentDetails,email:e.target.value})} type="email" className="form-control" id="email1" placeholder="Enter email"></input>

              <div>
                <label for="exampleSelect1" class="form-label mt-2">Gender</label>
                <select value={studentDetails.gender} onChange={e=>setStudentDetail({...studentDetails,gender:e.target.value})} class="form-select" id="exampleSelect1">
                <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>

                </select>
              </div>

            </div>
            <div className="col-lg-6">
              <label for="mobile" className="form-label mt-2 ms-0">Mobile Number</label>
              <input value={studentDetails.mobile} onChange={e=>setStudentDetail({...studentDetails,mobile:e.target.value})} type="text" className="form-control" id="mobile" placeholder="Mobile Number"></input>

              <div>
                <label for="exampleInputPassword1" class="form-label mt-2">Password</label>
                <input value={studentDetails.password} onChange={e=>setStudentDetail({...studentDetails,password:e.target.value})} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"></input>
              </div>

              <label for="dateof" className="form-label mt-2 ms-0">Date Of Birth</label>
              <input value={studentDetails.dob} onChange={e=>setStudentDetail({...studentDetails,dob:e.target.value})} type="date" className="form-control" id="dateof" placeholder="Date Of Birth"></input>

              <div>
                <label for="Course" class="form-label mt-2">Course</label>
                <select value={studentDetails.course} onChange={e=>setStudentDetail({...studentDetails,course:e.target.value})} class="form-select" id="Course">
                  <option>select course</option>
                  <option>Biology</option>
                  <option>Commerce</option>
                  <option>Computer science</option>
                  <option>Humanities</option>

                </select>

                <button onClick={e=>handleRegister(e)} className='btn btn-primary shadow rounded mt-3'>Register</button>
                <button onClick={e=>handleCancel(e)} className='btn btn-primary shadow rounded mt-3 ms-2'>Cancel</button>
              </div>

            </div>
          </div>

        </form>

      </div>

    </>
  )
}

export default Register