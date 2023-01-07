import React from 'react';
import ItemCount from '../ItemCount';
import '../Item/styles.scss';

const Item = ({ product }) => {
  return (
    <div className='col text-center '>
      <div className='card h-100'>
        <img src={product.image} className='card-img-top img-fluid' alt={`id-${product.id}`} />

        <div className='card-body d-flex flex-column m-3 justify-content-end'>
          <h5 className='card-title '>{product.title}</h5>
          <p className='card-text'>{product.price}</p>
        </div>

        <div className='card-footer '>
          <ItemCount />
        </div>
      </div>
    </div>
  );
};

export default Item;
