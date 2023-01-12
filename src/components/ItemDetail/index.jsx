import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
// import { TfiRulerAlt } from 'react-icons/tfi';

import { AiOutlineShoppingCart } from 'react-icons/ai';

// import './styles.scss';

const ItemDetail = ({ detail }) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = (cantidad) => {
    console.log(`Se agregaron: ${cantidad} de a ${detail.title} al carrito`);
    setQuantity(cantidad);
  };

  return (
    <div className='container'>
      <div className='bg-light shadow-lg px-4 py-3 mb-5'>
        <div className='px-3'>
          <div className='row'>
            {/* product gallery */}
            <div className='col-sm-12 col-xl-8 col-lg-12 pe-lg-0 pt-lg-4'>
              <img className='rounded mx-auto d-block  img-fluid' src={detail.image} alt='detail' />
            </div>

            {/* product details */}
            <div className='col-xl-4 pt-4 pt-lg-0'>
              <div className='product-details ms-auto pb-3'>
                <div className='mb-3'>
                  <span className='h3 fw-normal text-accent me-1'>$ {detail.price}</span>
                  <span className='badge bg-danger badge-shadow align-middle mt-n2'>Oferta</span>
                </div>
                <form className='mb-grid-gutter'>
                  {/* TALLES PARA ROPA */}
                  {/* <div className='mb-3'>
                    <div className='d-flex justify-content-between align-items-center pb-1'>
                      <label className='form-label' for='product-size'>
                        Talle:
                      </label>
                      <Link className='nav-link-style' href='#size-chart' data-bs-toggle='modal'>
                        <TfiRulerAlt /> Guia de Talle
                      </Link>
                    </div>
                    <select className='form-select'>
                      <option value=''>Seleccionar Talle</option>
                      <option value='xs'>XS</option>
                      <option value='s'>S</option>
                      <option value='m'>M</option>
                      <option value='l'>L</option>
                      <option value='xl'>XL</option>
                    </select>
                  </div> */}
                  <div className='mb-3 d-flex align-items-center'>
                    <select className='form-select me-3' style={{ width: '5rem' }}>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                    </select>

                    {/* A modo de ejemplo un boton mas */}
                    <button className='btn btn-danger shadow rounded d-block w-100' type='submit'>
                      <AiOutlineShoppingCart className='me-2 ' />
                      <Link className='text-decoration-none text-white' to='/cart'>
                        Añadir
                      </Link>
                    </button>
                  </div>
                </form>
                <aside className='detail-aside p-2'>
                  {quantity === 0 ? (
                    <ItemCount stock={20} initial={1} onAdd={onAdd} /> // ! En el caso de tener stock para hacerlo dinamico stock={detail.stock}
                  ) : (
                    <button className='btn btn-danger shadow rounded d-block w-100 ' type='submit'>
                      <AiOutlineShoppingCart className='me-2 ' />
                      <Link className='text-decoration-none text-white' to='/cart'>
                        Go Cart
                      </Link>
                    </button>
                  )}
                </aside>
                <div className='accordion' id='accordionExample'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingOne'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        Detalle Porducto
                      </button>
                    </h2>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        <strong>{detail.title}</strong>

                        <p className=' text-muted mt-2'>{detail.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
