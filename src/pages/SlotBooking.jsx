import React, {useEffect, useState, Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getSlotDetails } from '../actions/slotBookingAction';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SlotCard from '../components/SlotCard';
import './slot-card.css';
import logo from './images/logo.png';


const SlotBooking = () => {

    const history = useNavigate();

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, area } = useSelector((state) => state.slot);

    const [pincode, setPincode] = useState("");

    


    const pincodeSubmit = (e)=>{
        e.preventDefault();
        dispatch(getSlotDetails(pincode));
    }

    console.log(area);




  return (
   <div className='slot-container'>
        <div className='enter-pincode'>
            <Link to='/'><img src={logo} alt="" /></Link>
                <div  className='pincode-form'>
                <form action="#" onSubmit={pincodeSubmit}>
                    <h1>Enter pincode</h1>
                    <input 
                        className='input-pincode'
                        type="text" 
                        name='pincode' 
                        placeholder='Enter Pincode' 
                        required 
                        value={pincode}
                        onChange={(e)=>setPincode(e.target.value)}
                        />
                    
                    <button>Enter pincode</button>
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
  )
}

export default SlotBooking