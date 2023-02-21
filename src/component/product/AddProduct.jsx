import React,{useState} from 'react'
import {TextField,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const navigate=useNavigate();
  const [name,setname]=useState('');
  const [detail,setdetail]=useState('');
  const [category,setcategory]=useState('');
  const [price,setprice]=useState('')

  const handlecancel=()=>
  {
    navigate('/');
  }
  const handlesubmit=async()=>{
    try {
      var data = JSON.stringify({
        "name": "toy",
        "category": "gudda",
        "detail": "This gudda is fantastic",
        "price": "1000",
        "__v": 0
      });
      
      var config = {
        method: 'post',
      maxBodyLength: Infinity,
        url: 'http://localhost:5000/add',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      const response=await axios(config);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
   navigate('/');
  }
  return (
    <div className="justify-center flex text-center">
    <div className="shadow-md  w-2/3 justify-center text-center flex flex-col mt-20">
        <h1 className="font-bold text-2xl">Add Product</h1>
        <TextField id="outlined-basic" sx={{marginTop:"5px"}}  label="Name" variant="outlined"  value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <TextField id="outlined-basic" sx={{marginTop:"5px"}} label="Category" variant="outlined" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
        <TextField id="outlined-basic" sx={{marginTop:"5px"}} label="Detail" variant="outlined" value={detail} onChange={(e)=>{setdetail(e.target.value)}}/>
        <TextField id="outlined-basic" sx={{marginTop:"5px"}} label="Price" variant="outlined" value={price} onChange={(e)=>{setprice(e.target.value)}}/>
        <input type="file" className="mt-5"/>
        <Button variant="contained" sx={{marginTop:"5px"}} onClick={handlecancel}>Cancel</Button>
        <Button variant="contained" sx={{marginTop:"5px"}} onClick={handlesubmit}>Add</Button>
    </div>
    </div>
  )
}

export default AddProduct