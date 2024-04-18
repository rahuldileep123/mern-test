import React from 'react'
import studentImg from '../assets/student.jpg'
import Register from '../components/Register'

function Home() {
  return (
    <>
    <div style={{width:"100%",height:"100vh"}} className="container-fluid d-flex justify-content-center align-items-center">
         
         <div style={{width:"85%",height:"84vh"}} className="bg-primary">
          <div className="row">
            <div style={{height:"84vh"}}  className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
           
             <div  className='d-flex flex-column justify-content-center align-items-center p-4'>
                <img style={{width:"100px"}} src={studentImg} alt="" />
                <p style={{textAlign:"justify"}} className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi animi temporibus dignissimos exercitationem  </p>
             </div>
            </div>
            <div className="col-lg-8 d-flex justify-content-center align-items-center">
                <Register/>
            </div>
          </div>
         </div>
          

    </div>
    </>
  )
}

export default Home