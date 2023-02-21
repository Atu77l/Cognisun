import React from 'react'
import image from '../../images.jfif'
import { Button } from '@mui/material'

const ProductCart = () => {
  const handleRemoveCart=()=>{
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
    <div className="flex flex-rows shadow-md m-5">
     <div>
        <img src={image} alt="image"/>
     </div>
     <div className="flex flex-col justify-around text-center ml-10">
        <div className="text-xl">Cartoon Boxes with good Plastic material</div>
        <div className="text-xl">Cartoon Stuff</div>
        <div className="text-xl">4000$ </div>
        <Button onClick={handleRemoveCart}>Remove Item</Button>
     </div>
    </div>
  )
}

export default ProductCart