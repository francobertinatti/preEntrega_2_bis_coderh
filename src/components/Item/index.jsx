import React from 'react';
// import ItemCount from '../ItemCount';
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
        </div>

        <div className='card-footer '>
          <Link to={`/detail/${product.id}`} className=''>
            <AiOutlineShopping style={{ height: 35, width: 35 }} />
          </Link>
        </div>

        {/* Offcanvas right
         */}
        <button
          class='btn btn-primary'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasRight'
          aria-controls='offcanvasRight'
        >
          Detalle Producto
        </button>

        <div
          class='offcanvas offcanvas-end'
          tabindex='-1'
          id='offcanvasRight'
          aria-labelledby='offcanvasRightLabel'
        >
          <div class='offcanvas-header'>
            <h5 class='offcanvas-title' id='offcanvasRightLabel'>
              Offcanvas right
            </h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div class='offcanvas-body'>...</div>
        </div>
      </div>
      {/* Offcanvas right
       */}
    </div>
  );
};

export default Item;
