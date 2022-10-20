import React, { useEffect } from 'react'
import { Navigate,useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/",{state:"404 Not Found"})
      // this -1 will navigate to recent page
    },1000)
  })
  
  return (
    <div>
      <h1>NotFound</h1>
      {/* <Navigate to="/"/>  useful only in certain condition*/}
    </div>
  )
}

export default NotFound