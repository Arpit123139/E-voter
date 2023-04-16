import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './verify.css'

const Verify = () => {
  const isUpdated = localStorage.getItem('isUpdated');
  console.log({isUpdated});
  return (
   <div className='is-verify'>
    {isUpdated}
   </div>
  )
}

export default Verify