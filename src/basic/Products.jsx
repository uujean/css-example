import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import useProducts from '../hook/use-products';

export default function Products() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const showSale = () => setChecked(prev => !prev);
  const [loading, error, products] = useProducts({ salesOnly: checked});
      
  if(loading) return <Loading />

  if(error) return <p>{error}</p>
  return (
    <>
    <input id='checkbox' value={checked} type="checkbox"  onChange={showSale} />
    <label htmlFor="checkbox">show sale_product</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
