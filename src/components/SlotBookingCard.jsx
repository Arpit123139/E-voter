import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const SlotBookingCard = ({areaName, id, availability}) => {

  const location = useLocation();
  const history = useNavigate();
  const params = useParams();

  console.log(id);
  
  
  const clickhandle=()=> {
    
    history(location.pathname+`/${id}`);
   console.log( location.pathname+`/${id}`);
  }

  const hour = ["7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00",]

  return (
   
        
    <div className='booking-card' onClick={()=>clickhandle()}>
     
      <div className='booking-content'>
        <h1 className='booking-category'>{`Slot No = ${id+1}`}</h1>
        <h2 className='booking-heading'>{`Slot Time = ${hour[id]}-${hour[id+1]}`}</h2>
        <h2 className='booking-heading'>{`Available slots = ${availability}`}</h2>
       
      </div>
    </div>

           
  
  )
}

export default SlotBookingCard

//     <div><h1>{`Slot ${slotNo} = ${availability}`}</h1></div>
