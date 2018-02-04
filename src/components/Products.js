import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

export default () => {
  const productIds = Object.keys(products);
  return <React.Fragment>
    <ul>
      {productIds
        .map(id => <li key={id}><Link to={`/product/${id}`}>{products[id].name}</Link></li>)
      }
    </ul>
  </React.Fragment>
}
