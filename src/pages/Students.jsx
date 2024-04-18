import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getAllStudentsApi } from '../../services/allAPI';
import { useNavigate } from 'react-router-dom';
function Students() {
  const navigate = useNavigate()
const [allStudents,setAllStudents]=useState([])

const getAllStudents=async()=>{
  try{
    const result =await getAllStudentsApi()
    console.log(result);
    if(result.status==200){
      setAllStudents(result?.data)
  }else{
    console.log(result.response.data);
  }
  }catch(err){
    console.log(err);
  }
}

const handleBack=()=>{
navigate("/")
}
useEffect(()=>{
  getAllStudents()
},[])

  return (
    <>
    <div style={{width:"100%",height:"100vh"}} className="text-center">
      <h1>STUDENTS</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Mobile Number</th>
          <th>password</th>
          <th>DOB</th>
          <th>Course</th>
         
        </tr>
      </thead>
      <tbody>
        {allStudents?.map((student,index)=>(
           <tr key={index}>
           <td>{index+1}</td>
           <td>{student.firstname}</td>
           <td>{student.lastname}</td>
           <td>{student.address}</td>
           <td>{student.email}</td>
           <td>{student.gender}</td>
           <td>{student.mobile}</td>
           <td>{student.password}</td>
           <td>{student.dob}</td>
           <td>{student.course}</td>
         </tr>
        ))}
    
      
      
      </tbody>
    </Table>
    <button onClick={handleBack} className='btn btn-primary rounded'>Back</button>
    </div>
    </>
  )
}

export default Students