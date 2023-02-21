import React, { useState, useEffect } from 'react'
import ProductCart from '../card/ProductCart'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Payment from '../card/Payment'
import axios from 'axios';

const Cart = (props) => {
  const [cartItem, setCart] = useState([]);

  const fetch = async () => {
    try {

      var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/cart_item/63f3809de20849582bcd227e',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const response = await axios(config);
      console.log("response" + JSON.stringify(response.data));
      setCart(response.data.cart);
      console.log("cartItem" + cartItem);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetch();
  }, [])
  return (
    <>
      <Navbar count={props.count} />
      <div className="flex flex-row">
        <div className="grid grid-columns-1 w-2/3">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />  
        </div>
        <Payment />
      </div>
      <Footer />
    </>
  )
}

export default Cart