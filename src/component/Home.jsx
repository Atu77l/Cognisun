import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Product from './product/Product'

const Home = (props) => {
  return (
    <>
        <div className="">
        <Navbar count={props.count} />
        <div className="grid grid-rows-4 shadow-lg " style={{height:"220vh"}}>
        <Product count={props.count} setcount={props.setcount}/>
        </div>
        <Footer />
        </div>
    </>
  )
}

export default Home