import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getAllSlots } from '../actions/allSlotsAction';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import SlotBookingCard from '../components/SlotBookingCard';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import '../components/slot-booking-card.css';

const AllSlots = () => {

    const dispatch = useDispatch();


    const {areaName} = useParams();
    console.log(areaName);

    const { loading, error, slot } = useSelector(state=>state.allSlots);
    
    useEffect(()=>{
        dispatch(getAllSlots(areaName));
    
    },dispatch,areaName);

    
    const {timeslot} = slot ;
    console.log(timeslot);


  return (
    <div>
      <Navbar />
       <section className='booking-hero'>
        
          <div className='booking-card-grid'>
          {timeslot &&
                timeslot?.map((item,i)=>(
                     /* <h1>{`Slot ${i + 1} = ${item.availability}`}</h1>  */
                    
                    <SlotBookingCard areaName={areaName} id={i} availability={item.availability}/>
                   
                   
                   
                ))}
          </div>
        </section>
       
    </div>
  )
}

export default AllSlots