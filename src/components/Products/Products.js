import React from 'react'
const Products = () => {
  const productslist = [
    {
      name: 'A2 Desi Cow Ghee',

      cost: '925.00',
      img: 'https://vaaradhifarms.com/cdn/shop/files/Ghee_HighRes.jpg?v=1698928244&width=500',
    },
    {
      name: ' Natural Honey',

      cost: '475.00',
      img: 'https://vaaradhifarms.com/cdn/shop/files/Honey2.png?v=1698854744&width=400',
    },
    {
      name: 'Wild Raw Honey',

      cost: '575.00',
      img: 'https://vaaradhifarms.com/cdn/shop/files/WhatsAppImage2024-04-26at1.21.52AM.jpg?v=1714074796&width=400',
    },
    {
      name: 'Small bee honey',

      cost: '1249.00',
      img: 'https://vaaradhifarms.com/cdn/shop/files/WhatsAppImage2024-03-26at7.23.32PM.jpg?v=1711461650&width=400',
    },
  ]

  return (
    <>
      <div className="container">
        <div className="row">
          {productslist.map(copyofproductslist => {
            const {name, cost, img} = copyofproductslist

            return (
              <>
                <div className="col-3">
                  <img src={img} />
                  <h4>{name}</h4>
                  <h4>{cost}</h4>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Products
