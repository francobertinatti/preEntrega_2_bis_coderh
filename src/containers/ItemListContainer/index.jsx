import React from 'react'
import Item from '../../components/Item'

const ItemListContainer = () => {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 m-3">
      <Item title={'Titulo 1'} content={'Esto es una prueba'} />
      <Item title={'Titulo 2'} content={'Esto es una prueba'} />
      <Item title={'Titulo 3'} content={'Esto es una prueba'} />
      <Item title={'Titulo 4'} content={'Esto es una prueba'} />
      <Item title={'Titulo 5'} content={'Esto es una prueba'} />
      <Item title={'Titulo 6'} content={'Esto es una prueba'} />
    </div>
  )
}

export default ItemListContainer
