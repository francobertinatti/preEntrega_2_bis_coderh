import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  // !CAPTURAMOS categorias que queremos filtrar mediante un HOOK "params"
  const { categoryId } = useParams();

  console.log(categoryId);

  //Este effect se ejecuta cuando se monta el componente
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((products) => {
        // * categoryId se va a realizar le filtro de productos por categorias
        if (categoryId) {
          const prodFiltradosPorCategorias = products.filter(
            (producto) => producto.category === categoryId
          );
          console.log(prodFiltradosPorCategorias);
          setProducts(prodFiltradosPorCategorias);
        } else {
          setProducts(products);
        }
      })
      .catch((err) => {
        alert('Hubo un error');
      });
  }, [categoryId]);

  // console.log(products);

  return (
    <div>
      <ItemList productos={products} />
    </div>
  );
};

export default ItemListContainer;
