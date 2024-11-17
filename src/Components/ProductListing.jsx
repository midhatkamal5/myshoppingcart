import React from 'react';
import SingleProduct from './SingleProduct';

function ProductListing({ products,addToCart}) {
  const rows = [];
  for (let i = 0; i < products.length; i += 4) {
    rows.push(products.slice(i, i + 4));
  }

  return (
    <div className="container">
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((product) => (
            <div className="col-3" key={product.id}>
              <SingleProduct products={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
