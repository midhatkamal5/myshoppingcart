
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function SingleProduct({products,addToCart}){

return(
<div class="product">
<div class="col-sm-3" style={{padding:'10px'}}>
  <div class="card" style={{width:'250px', boxShadow:'5px 5px 5px grey'}}>
    <img class="card-img-top" src={products.thumbnail} alt="Card image" style={{width:'100%'}}></img>
    <div class="card-body">
      <h4 class="card-title text-center">{products.title}</h4>
      <p class="text-center">{products.price}</p>
      <button class="btn btn-primary mt-auto" onClick={() => addToCart(products)}>Add to Cart</button>
    </div>
  </div>
  <br/>
</div>
</div>
);
}


export default SingleProduct;