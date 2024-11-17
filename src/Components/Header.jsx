
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import '../App.css';


function Header({cartcount}){
return(
    <>
<nav class="navbar navbar-expand-lg navbar-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">
    <h2 style={{paddingTop:'5px'}}><img src="shoppingcartlogo.png" alt="Logo" class="d-inline-block align-text-top" style={{width:'70px',height:'50px'}}/>My Shop</h2>
  </a>
  <div class="d-flex">
  <Link to="/" className='btn btn-info'>Home</Link>
  <Link to="/aboutus" className='btn btn-info'>About</Link>
  <Link to="/cart" className='btn btn-info'>MyCart</Link>
  </div>
  <div class="tile">
    <div className="cartcount">
            <h3>Cart<sup>{cartcount}</sup></h3>
        </div>
    </div>
</div>
</nav>

</>

);
}
export default Header;