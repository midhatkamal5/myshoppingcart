import React, { Component,useEffect,useState } from 'react';
import Header from './Components/Header';
import ProductListing from './Components/ProductListing';
import ShowCart from './Components/ShowCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Components/About';
import NotFound from './Components/NotFound';


function App(){
  const[cartcount,setCartCount]=useState(0);
  const[quantity,setQuantity]=useState(0);
  const[error,setError]=useState(null);
  const [myCart, setMyCart] = useState([]);
  const [list, setList] = useState([]);

  function addToCart(product){
    const existingProduct = myCart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      console.log("product already exist")
      setMyCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }  
            : item
        )
      );
      setCartCount(cartcount + 1); 
    } else {
      console.log("product first time")

      setMyCart((prevCart) => [
        ...prevCart,
        { ...product, qty: 1 },  
      ]);
      setCartCount(cartcount + 1);  
    }
  };  

useEffect(() => {
  async function fetchData(){
    try {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        console.log("Error in loading");
        setError("Error in loading");
        return;  
      }

      const data = await response.json(); 
      console.log(data.products); 
      setList(data.products); 
      setError(null); 
      console.log("Data successfully loaded");
    } catch (error) {
      setError("Error fetching data");
      console.error("Error:", error);
    }
  };

  fetchData();
}, []); 

return (
      <>
      <div className="container">
      <BrowserRouter>
      <Header cartcount={cartcount}/>
      <Routes>
        <Route index element ={<ProductListing products={list} addToCart={addToCart}/>}/>
        <Route path="/cart" element={<ShowCart myCart={myCart}/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      </>
    );
  }

export default App;