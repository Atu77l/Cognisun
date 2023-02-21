import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from './../logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
function Navbar(props) {
 

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="logo" className="h-14 m-5 rounded-xl" />
           <div className="flex flex-row font-bold text-xl">
          <Link to='/add'><div className="ml-10">AddProduct</div></Link> 
          <div className="ml-10">AddCart</div>
           <Link to='/cart'><ShoppingCartIcon sx={{marginLeft:"700px"}}/>{props.count}</Link>
           </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
