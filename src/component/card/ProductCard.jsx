import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from './../../images.jfif'
import { Button } from '@mui/material';
import axios from 'axios'

export default function ProductCard(props) {
  const handleCart=async()=>{
   
    try {
      var data = JSON.stringify({
        "name": "toy",
        "category": "gudda",
        "detail": "This gudda is awesome",
        "price": "1000",
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
      const response=await axios(config);
      console.log(response);
      props.setcount(props.count+1);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <Card sx={{ maxWidth: 345 ,minHeight:270,minWidth: 120,flexDirection:"row",justifyItems:"center"}}>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
        <div className="p-5 ">
        <Typography variant="body2" color="text.secondary" className="flex text-center justify-center">
        POCO X4 Pro 5G (Laser Blue, 128 GB)
        </Typography>
        <Typography variant="body2" color="text.secondary" className="flex text-center justify-center">
         Mobile
        </Typography>
        <Typography variant="body2" color="text.secondary" className="flex text-center justify-center">
         4000$
        </Typography>
        <div className="flex justify-center">
        <Button variant="contained">Remove_Item</Button> 
        <Button variant="contained" sx={{marginLeft:"3px"}} onClick={handleCart}>AddCart</Button>
        </div>
        </div>
    </Card>
  );
}
