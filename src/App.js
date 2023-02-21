import React ,{useState} from 'react'
import Home from './component/Home'
import Cart from './component/cart/Cart'
import AddProduct from './component/product/AddProduct'
import './App.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'

const App = () => {
  const [count,setcount]=useState(0);
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home count={count} setcount={setcount}/>}/>
      <Route path='/cart' exact element={<Cart count={count}/>}/>
      <Route path='/add' exact element={<AddProduct/> }/>
    </Routes>
   </BrowserRouter>
  )
}

export default App