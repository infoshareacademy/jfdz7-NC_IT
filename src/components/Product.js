import React from 'react';

import items from '../data/products';

export default (props) => {
  const productToDisplay = props.match.params.id;
  const product = items[productToDisplay];

  return product?
      <React.Fragment>
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <button>Dodaj do koszyka</button>
      </React.Fragment>
      :
      <p>Brak produktu</p>
}