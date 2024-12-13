import React from 'react'
import '../styles/global.scss'
import Navbar from './Navbar/Navbar'
import Advert from './Advert/advert'
import { useState } from 'react'

import Productslist from './Productslist/Productslist'
import Footer from './Footer/Footer'

const App = () => {
  const [searchdata, updatesearchdata] = useState('')
  return (
    <>
      <Navbar updatesearchdata={updatesearchdata} />

      <Advert />

      <Productslist  searchdata={searchdata}/>

      <Footer />
    </>
  )
}
export default App
