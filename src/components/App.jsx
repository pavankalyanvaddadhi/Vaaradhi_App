import React from 'react'
import Home from './Home/Home'
import Headerbanner from './Headerbanner/Headerbanner'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Productslist from './Productslist/Productslist'
import Login from './Login/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Contactus from './Contactus/Contactus'
import FAQ from './FAQ/FAQ'
import TrackAll from './TrackAll/TrackAll'
import ViewCollections from './ViewCollections/ViewCollections'
import ShopAll from './ShopAll/ShopAll'
const App = () => {
  const [searchdata, updatesearchdata] = useState('')
  return (
    <>
      <BrowserRouter>
        <Headerbanner />
        <Navbar updatesearchdata={updatesearchdata} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/TrackAll" element={<TrackAll />} />
          <Route path="/ViewCollections" element={<ViewCollections />} />
          <Route path="/ShopAll" element={<ShopAll />} />
          
        </Routes>
        <Productslist searchdata={searchdata}  />
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
