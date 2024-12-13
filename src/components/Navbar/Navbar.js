import React from 'react'
import {FaAlignJustify} from 'react-icons/fa' //More options icon
import {CiSearch} from 'react-icons/ci' //Search icon
import {IoPerson} from 'react-icons/io5' //Account Icon
import {IoCartOutline} from 'react-icons/io5' //Cart Icon
const Navbar = ({updatesearchdata}) => {
  const handlesearch =(event)=>{
    updatesearchdata(event.target.value)
  }
  return (
    <>
<div className='row'style={{backgroundColor:"#F8C027", padding:30}}>
<div className="col-2" style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
          <FaAlignJustify />
        </div>
        <div className="col-6" style={{display:'flex', justifyContent:'center'}}>
          <img src="https://vaaradhifarms.com/cdn/shop/files/Asset_1_2x_399eef15-89ca-42cd-ac92-8f75b5e60552.png?v=1685440038&width=370" style={{width:185,height:107}}/>
        </div>
        <div className="col-4"style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
          <div className="row" >
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
