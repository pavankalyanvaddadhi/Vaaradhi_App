import React from 'react'
import Navbar from './Navbar/Navbar'
import Advert from './Advert/advert'
import Sectionlove from './sectionlove/sectionlove'
import Products from './products/products'

const App = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
        <div className="col-12">
          <Advert />
        </div>
        <div className="col-12">
          <Sectionlove />
        </div>
        <div className="col-12">
          <div className="row">
            <Products />
          </div>
        </div>
      </div>
    </>
  )
}
export default App
