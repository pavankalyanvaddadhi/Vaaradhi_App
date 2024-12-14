import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  const tabledata = [
    {
      name1: 'FAQ',
      name2: ' Trade Name : Vaaradhi Farms',
    },
    {
      name1: 'Shipping Policy',
      name2: 'Email Support : vaaradhifarms@gmail.com',
    },
    {
      name1: 'Refund Policy',
      name2: 'Shipping Policy',
    },
    {
      name1: 'Refund Polocy',
      name2: 'Customer Care Number :',
    },
    {
      name1: 'Cancellation Policy',
      name2: '+91 89770 21193',
    },
    {
      name1: 'Privacy Policy',
      name2: '+91 89770 21197',
    },
    {
      name1: 'Terms of Service',
      name2: 'Customer Support Timings : 10:30am to 6:30pm',
    },
    {
      name1: 'Contact Information',
      name2: 'Address : Manikonda, Hyderabad, Telangana , Pin - 500089',
    },
    {
      name1: 'Wild forest honey certificate',
      name2: 'FSSAI : 23623028001252',
    },
  ]

  return (
    <>
      <table class="container-fluid" style={{backgroundColor:"#F8C027"}}>
        <tr >
          <th style={{paddingLeft:"50px",paddingTop:"50px"}}>Customer Care</th>

          <th style={{paddingTop:"50px"}}>Contact info</th>
        </tr>

        {tabledata.map(copyoftabledata => {
          const {
            name1,
            name2,
            name3,
            name4,
            name5,
            name6,
            name7,
            name8,
            name9,
          } = copyoftabledata
          return (
            <>
              <tr>
                <td style={{paddingLeft:"50px",paddingTop:"20px"}}>{name1}</td>

                <td  style={{paddingRight:"300px"}}>{name2}</td>
              </tr>
            </>
          )
        })}
     <div className='container' style={{padding:"30px"}}>
     <FaInstagram />
     </div>
      <div className='container' style={{padding:"30px",display:"flex"}}>
        <div>
        <FaRegCopyright />
        </div>
        <div style={{paddingLeft:"10px"}}>
            <p>
            2024, Vaaradhi Farms. Built by Ecommified.in
            </p>
        </div>
     
      </div>
      
      </table>
    </>
  )
}
export default Footer
