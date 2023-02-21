import React from 'react'
import { Button } from '@mui/material'

const Payment = () => {
  const handleCart=()=>{
    var axios = require('axios');
var data = JSON.stringify({
  "name": "toy",
  "category": "cartoon",
  "detail": "helloo",
  "__v": 0
});

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'http://localhost:5000/cart/63f3809de20849582bcd227e',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
  }
  return (
    <div className="h-80 w-80 m-10 p-10  shadow-md">
        <h2>Payment :   4000</h2>
        <h2>Total Item :  5</h2>
        <h2>Total Discount : 1000</h2>
        <h2>Total Payment : 3000 </h2>
        <Button variant="contained" sx={{borderRadius:"0%",width:"250px",margin:"5px"}}>Order It</Button>
        <br/>
        <Button variant="contained" sx={{borderRadius:"0%",width:"250px",margin:"5px"}} onClick={handleCart}>Empty Cart Item</Button>
    </div>
  )
}

export default Payment