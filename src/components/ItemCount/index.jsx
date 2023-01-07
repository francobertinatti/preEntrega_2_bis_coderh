import React, { useEffect, useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const sumarItem = () => {
    console.log('suma 1');
    setCount(count + 1);
  };
  const restarItem = () => {
    console.log('resta 1');
    if (count > 1) setCount(count - 1);
  };

  useEffect(() => {
    // console.log('se monto el componente');
  }, []);

  return (
    <div className='container'>
      <div className='row '>
        <button onClick={restarItem} className='col'>
          -
        </button>
        <div className='col'>{count}</div>
        <button onClick={sumarItem} className='col'>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
