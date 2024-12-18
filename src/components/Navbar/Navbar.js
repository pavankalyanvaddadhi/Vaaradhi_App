import React from 'react'

import {CiSearch} from 'react-icons/ci' //Search icon
import {IoPerson} from 'react-icons/io5' //Account Icon
import {IoCartOutline} from 'react-icons/io5' //Cart Icon
import { useNavigate } from 'react-router-dom'
const Navbar = ({updatesearchdata}) => {
  const handlesearch = event => {
    updatesearchdata(event.target.value)
  }
  const navigate=useNavigate();
  function handlehome(){
    navigate("./Login")
  }
  function handleViewCollections(){
    navigate("./ViewCollections")
  }
  function handleShopAll(){
    navigate("./ShopAll")
  }
  function handleFAQ(){
    navigate("./FAQ")
  }
  function handleTrackAll(){
    navigate("./TrackAll")
  }
  function handleContactUs(){
    navigate("./ContactUs")
  }
  return (
    <>
     
      <div className="row" style={{backgroundColor: '#F8C027', padding: 20}}>
        <div
          className="col-1"
          style={{display: 'flex', justifyContent: 'flex-start'}}>
          <img
            src="https://vaaradhifarms.com/cdn/shop/files/Asset_1_2x_399eef15-89ca-42cd-ac92-8f75b5e60552.png?v=1685440038&width=370"
            style={{width: 185, height: 107}}
          />
        </div>
        <div
          className="col-7"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
           
            
            fontweight: "700"
          }} >
           
          <button className='p-3 fw-bold ' style={{border:"none",backgroundColor:"#F8C027"}} onClick={handlehome}>Home</button> 
          <button className='p-3 fw-bold ' style={{border:"none",backgroundColor:"#F8C027"}} onClick={handleViewCollections}>View Collections</button> 
          <button className='p-3 fw-bold ' style={{border:"none",backgroundColor:"#F8C027"}} onClick={handleShopAll}>Shop All</button> 
          <button className='p-3 fw-bold ' style={{border:"none",backgroundColor:"#F8C027"}} onClick={handleFAQ}>FAQ</button> 
          <button className='p-3 fw-bold ' style={{border:"none",backgroundColor:"#F8C027"}} onClick={handleTrackAll}>Track All</button> 
          <button className='p-3 fw-bold ' style={{border:"none",backgroundColor:"#F8C027"}} onClick={handleContactUs}>Contact Us</button> 
        </div>
        <div
          className="col-3"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <div className="row">
            <div className="col">
              <input onChange={handlesearch} type="text" placeholder="Search" />
            </div>
            <div className="col">
              <IoPerson />
            </div>
            <div className="col">
              <IoCartOutline />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
