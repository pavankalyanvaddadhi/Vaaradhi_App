import React, {useState} from 'react'
import {CiSearch} from 'react-icons/ci' //Search icon
const Productslist = ({searchdata}) => {
  const productslist1 = [
    {
      name: 'A2 Desi Cow Ghee',

      cost: '925.00',
      img: 'https://vaaradhifarms.com/cdn/shop/files/Ghee_HighRes.jpg?v=1698928244',
    },
    {
      name: ' Natural Honey',

      cost: '475.00',
      img: 'https://vaaradhifarms.com/cdn/shop/files/Honey2.png?v=1698854744',
    },
    {
      name: 'Wild Raw Honey',

      cost: '575.00',
      img: 'https://vaaradhifarms.com/cdn/shop/files/WhatsAppImage2024-04-26at1.21.52AM.jpg?v=1714074796',
    },
    {
      name: 'Small bee honey',

      cost: '1249.00',
      img: 'https://vaaradhifarms.com/cdn/shop/files/WhatsAppImage2024-03-26at7.23.32PM.jpg?v=1711461650',
    },
    {
      name: 'Natural Turmeric',

      cost: '925.00',
      img: 'https://vaaradhifarms.com/cdn/shop/files/Adityark_a_bag_of_a_tan_colored_product_filled_with_turmeric_ki_30bdb482-db0c-4404-8b6c-cb59bec40502.png?v=1685016262&width=600',
    },
    {
      name: ' Forest Turmeric powder',

      cost: '475.00',
      img: 'https://vaaradhifarms.com/cdn/shop/files/deepixelstudios_wild_turmeric_powder_in_a_pouch_1080x1080_a5f1c16c-5f91-4fc1-b586-b6b292eb5c21.png?v=1714064248&width=600',
    },
    {
        name: 'Allam Pickle',
  
        cost: '925.00',
        img: 'https://vaaradhifarms.com/cdn/shop/files/Allampickle1.png?v=1730175392&width=400',
      },
      {
        name: ' Gongura Pickle',
  
        cost: '475.00',
        img: 'https://vaaradhifarms.com/cdn/shop/files/ecommified_dark_red_pickle_paste_soaking_in_oil_in_a_white_bowl_eef36501-a599-44f3-88c4-743bedafae43.webp?v=1717776675&width=400',
      },
      {
        name: 'Kariveypaku Pickle',
  
        cost: '575.00',
        img: 'https://vaaradhifarms.com/cdn/shop/files/ecommified_black_pickle_paste_soaking_in_oil_in_a_white_bowl_fr_ef09eb14-ea5c-400d-bceb-29779d7b725e.webp?v=1717780032&width=400',
      },
      {
        name: 'Lemon Pickle',
  
        cost: '1249.00',
        img: 'https://vaaradhifarms.com/cdn/shop/files/ecommified_red_lime_pickle_paste_in_a_white_bowl_table_backgrou_4f4a3c66-7924-44b2-8a54-f244a09c2cd3.webp?v=1717780772&width=400',
      },
  ]

  
  
  

  
  const filterdata = productslist1.filter(event => {
    return event.name.toLowerCase().includes(searchdata.toLowerCase())
  })

  return (
    <>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '50px',
        }}>
       
       
      </div>

      <div className="container-fluid mt-3">
        <h1
          className="p-4"
          style={{fontStyle: 'popins', fontSize: '40', fontWeight: '800'}}>
          Shop Our Customers Favorite
        </h1>
        <p className="p-4">
          These are Our Best Sellers You’ll Fall in Love With Tooo
        </p>
        <div className="row m-5">
          {filterdata.map(copyofproductslist => {
            const {name, cost, img} = copyofproductslist

            return (
              <>
                <div className="col-3 ">
                  <img
                    src={img}
                    style={{
                      width: '300px',
                      height: '300px',
                      borderRadius: '5px',
                      marginTop:"20px"
                    }}
                  />

                  <h4 style={{fontWeight: '800px'}}>{name} </h4>
                  <h5>From Rs.{cost}</h5>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Productslist
