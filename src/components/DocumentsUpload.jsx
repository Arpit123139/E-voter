import React, { useRef, useEffect, Fragment, useState } from 'react';
import './travelre.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateSlotDetails } from '../actions/slotsAction';
import { useAlert } from 'react-alert';




       
const DocumentUpload = ({areaName, id, voterId}) => {
    const [image,setImage]=useState('')
    const [url,setUrl]=useState('')
    const [email,setEmail]=useState('')
    const [amount,setAmount]=useState('')

    const history = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();
    const {isUpdated} = useSelector(state=>state.slotDetails);

    useEffect(()=>{
        dispatch(updateSlotDetails(areaName,id, voterId));
        localStorage.setItem('isUpdated',isUpdated);
        console.log({isUpdated});
        
       if(isUpdated==="User Not Verified ") {
        alert.error("Verification failed");
       }
       if(isUpdated==="Verified"){
        alert.success("Verification successful. Slot details sent to email successfully.")
       }
    },[isUpdated],localStorage,dispatch,areaName,id,voterId)
   
    console.log(email)
    const addinpdata=async ()=>{
        
        
        
        // e.preventDefault();
        // console.log("Hello")
        // const formdata=new FormData();
        // formdata.append('file',image)
        // formdata.append("upload_preset","j7hjcv76")
        // formdata.append("cloud_name","dsojdaybz")
    
        // const res1=await fetch('https://api.cloudinary.com/v1_1/dsojdaybz/image/upload',{
        //   method:"post",
        //   body:formdata
        // })
        
        // const ImgData=await res1.json()
        // const url1=ImgData.url
        // setUrl(url1);
    
        // console.log("iMAGE uRL!!!!!!!!!!! "+ImgData.url)

        // const res=await fetch(`http://localhost:4000/api/document/upload/${id}`,{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },body:JSON.stringify({
        //         email:email,
        //         url:url1
        //     })
        // })

        // console.log(res)
        console.log("Submit clicked");
        dispatch(updateSlotDetails(areaName,id, voterId));
        localStorage.setItem('isUpdated',isUpdated);
        // history('/isverify');
    }

    
const handleImageInput=(e)=>{
    console.log(e.target.files)
    setImage(e.target.files[0]);
}
const imageUrl="";


    
  return (
    <>
       <div className='travel-body'>
       
            
                {/* <form className='travel-form' action="#"  > */}
                    {/* <h1 className='travel-h1'>Document Upload</h1> */}
                    
                    {/* <label for="upload">Choose a document:</label> */}

                    {/* <select name="upload" id="upload">
                    <option value="Passport">Passport</option>
                    <option value="Driving licence">Driving licence</option>
                    <option value="Service identity card of the state government or the central government">Service identity card of the state government or the central government</option>
                    <option value="PAN card">PAN card</option>
                    <option value="Passbook issued by bank or post office">Passbook issued by bank or post office</option>
                    <option value="MGNREGA job card">MGNREGA job card</option>
                    <option value="PAN card">PAN card</option>
                    <option value="Health insurance card issued by the Ministry of Labour">Health insurance card issued by the Ministry of Labour</option>
                    <option value="Pension document with a photograph">Pension document with a photograph</option>
                    <option value='Authenticated photo voter slip issued by the election commission'>Authenticated photo voter slip issued by the election commission</option>
                    </select> */}

                    {/* <input 
                        type="email" 
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder='Enter email'
                        required
                    /> */}

                    {/* <input
                        className='travel-input' 
                        type='file'
                        id='file-input'
                        name='imageStyle' 
                       
                        onChange={handleImageInput}
                        placeholder='imageStyle' 
                        required 
                        /> */}
                    <button className='travel-button' type='submit' hidden onClick={addinpdata}>Submit</button>
                {/* </form> */}
            
        
       </div> 
        
    </>
  )
}

export default DocumentUpload