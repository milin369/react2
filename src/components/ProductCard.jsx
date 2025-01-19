import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
}

export default ProductCard;
