import logo from './logo.svg';

import LoginSignUp from './components/LoginSignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SlotBooking from './pages/SlotBooking';
import AllSlots from './pages/AllSlots';
import ConfirmSlots from './components/ConfirmSlots';
import Travelre from './components/Travelre';
import SignupHome from './pages/SignupHome';
import CommunityHome from './components/CommunityHome';
import CreatePost from './components/CreatePost';

import GoogleMaps from './components/GoogleMaps';
import Guide from './components/Guide';
import Verify from './components/Verify';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<SignupHome />} />
        <Route path='/home' element = {<Home />} />
        <Route path='/login' element = {<LoginSignUp />} />
        <Route path='/slotbooking' element={<SlotBooking />} />
        <Route path='/slot/:areaName' element={<AllSlots />} />
        <Route path='/slot/:areaName/:id' element={<ConfirmSlots />} />
        <Route path='/travelre' element={<Travelre />} />
        <Route path='/home/:token' element ={<CommunityHome/>}/>
        <Route path='/CreatePost/:token' element ={<CreatePost/>}/>
        <Route path='/guidelines' element={<Guide />} />
        <Route path='/isverify' element={<Verify />} />
        
      </Routes>
    </BrowserRouter>

     
    </>
  );
}

export default App;
