import React from "react";
import { Link } from 'react-router-dom';


function ShowCart({ myCart }) {
  return (
    <>
      <h1>Your Cart</h1>
      {myCart.length === 0 ? (
         <div> <p>Your cart is empty.</p> <Link to='/' className='btn btn-info'>Go to Shopping</Link></div>
        ) : (
          <div className="divison">
            <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {myCart.map((x, i) => (
            <tr key={i}>
              <td>{x.title}</td>
              <td>${parseFloat(x.price)}</td>
              <td>{x.qty}</td>
              <td>
                <img
                  src={x.thumbnail}
                  alt={x.title}
                  style={{ width: "50px", height: "auto" }} 
                />
              </td>
              <td>${(parseFloat(x.price) * x.qty).toFixed(2)}</td> 
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-end">
        <h3 style={{color:'green'}}>
          Total: $
          {myCart.reduce((acc, item) => acc + parseFloat(item.price) * item.qty, 0)}
        </h3>
      </div>
          </div>
        )}
    </>
  );
}

export default ShowCart;
