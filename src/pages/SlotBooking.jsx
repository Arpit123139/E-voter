import React, {useEffect, useState, Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getSlotDetails } from '../actions/slotBookingAction';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SlotCard from '../components/SlotCard';
import './slot-card.css';
import Navbar from '../components/Navbar';
import { getAllSlots } from '../actions/allSlotsAction';


const SlotBooking = () => {

    const history = useNavigate();

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, area } = useSelector((state) => state.slot);

    const [name, setName] = useState("");
    const [areaName, setAreaName] = useState("");
    const [voterId, setVoterId] = useState("");

    


    const detailsSubmit = ()=>{
        
        console.log(voterId);
        localStorage.setItem('voterId',voterId);
        dispatch(getAllSlots(areaName));
    }

    console.log(area);




  return (
   <div>
    <Navbar />
    <div className='slot-container'>
        <div className='enter-pincode'>
           
                <div  className='pincode-form'>
                <form action="#" >
                    <h1>Enter your Details</h1>
                    <input 
                        className='input-pincode'
                        type="text" 
                        name='name' 
                        placeholder='Enter Your Name' 
                        required 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                    <input 
                        className='input-pincode'
                        type="text" 
                        name='area' 
                        placeholder='Enter Your Area' 
                        required 
                        value={areaName}
                        onChange={(e)=>setAreaName(e.target.value)}
                        />
                    
                    <input 
                        className='input-pincode'
                        type="text" 
                        name='voterId' 
                        placeholder='Enter Your Voter Id Number' 
                        required 
                        value={voterId}
                        onChange={(e)=>setVoterId(e.target.value)}
                        />
                    
                    <Link to={`/slot/${areaName}`}><button onClick={()=>detailsSubmit()}>Submit</button></Link>
                </form>
                </div>
    </div>
    
    <section className='hero'>
        <div className='card-grid'>
        {area && 
                area.map((item)=> ( 
                <SlotCard areaName={item.areaName} description={item.description} imgUrl={item.url}/>
    
                ))}
    
        </div>
    </section>
    </div>
   </div>
  )
}

export default SlotBooking