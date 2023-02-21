import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HelpIcon from '@mui/icons-material/Help';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
function Footer() {
  return (
    <AppBar position="static">
       
         <div className="flex flex-row justify-around h-20 text-center mt-5">
         <div className="flex flex-row">
            <h4><AccountBalanceIcon/>Become a Seller</h4>
         </div>
         <div className="flex flex-row">
            <h4><AddShoppingCartIcon/>Advertise</h4>
         </div>
         <div className="flex flex-row">
            <h4><CardGiftcardIcon/>gift Cards</h4>
         </div>
        <div className="flex flex-row">
            <h4><HelpIcon/>Help Center</h4>
         </div>
         </div>
    
    </AppBar>
  );
}
export default Footer;
