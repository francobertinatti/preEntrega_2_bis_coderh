import React from 'react';
import ItemCount from '../ItemCount';
import '../Item/styles.scss';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';

const Item = ({ product }) => {
  return (
    <div className='col text-center '>
      <div className='card h-100'>
        <img src={product.image} className='card-img-top img-fluid' alt={`id-${product.id}`} />

        <div className='card-body d-flex flex-column m-3 justify-content-end'>
          <h2 className='card-title '>{product.title}</h2>
          <h5 className='card-text'>${product.price}</h5>
          <p className='card-text'>{product.description}</p>
          
        </div>

        <div className='card-footer '>
          <ItemCount />
          <Link to={`/detail/${product.id}`} className=''>
            <AiOutlineShopping style={{ height: 35, width: 35 }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
