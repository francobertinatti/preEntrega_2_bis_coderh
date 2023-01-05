import React, { useState, useEffect } from 'react'
import Item from '../../components/Item'

// const [count, setCount] = useState(0) ► INICIALIZATION EN 0

//   const sumarContador = () => { ► UTILIZAMOS EL ESTADO
//     console.log('suma 1')
//     setCount(count + 1) ► A ESTE ESTADO COUNT , SE LO MODIFICA CON LA FUNCION QUE CAMBIA EL ESTADO QUE ES setCount
//   }

const ItemListContainer = () => {
  const [count, setCount] = useState(0)

  const sumarContador = () => {
    console.log('suma 1')
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('se monto el componente')
  }, [])

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
      <button onClick={sumarContador}>sumar 1</button>
      <span>{count}</span>

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
