import React ,{useState,useEffect} from 'react'
import Card from './../card/ProductCard'
import axios from 'axios'
const Product = (props) => {
  const [product,setproduct]=useState([]);

  const fetchProduct=async()=>{
    try {
      var config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: 'http://localhost:5000/item',
        headers: { 
          'Content-Type': 'application/json'
        }
      };
      const response=await axios(config);
      console.log(JSON.stringify(response));
      const data=JSON.stringify(response);
      setproduct(data);
      console.log("product"+ product);
    } catch (error) {
      console.log(error);
    }
}
useEffect(()=>{
  fetchProduct();
},[])
  
  return (
    <div className="grid grid-cols-4 gap-8 m-10">

<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
<Card count={props.count} setcount={props.setcount}/>
    </div>
  )
}

export default Product