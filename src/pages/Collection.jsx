import { useEffect, useState } from 'react';
import '../style/Collection.css';

function Collection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  

  return (
    <div className='collection'>
      <div className='filter'>
        <h1>FILTERS</h1>

        <div className='category'>
          <h2>CATEGORIES</h2>
          <p>
            <input type='checkbox' value='Man'  />Men
          </p>
          <br />
          <p>
            <input type='checkbox' value='Woman'  />Women
          </p>
          <br />
          <p>
            <input type='checkbox' value='Kids'  />Kids
          </p>
        </div>

        <div className='type'>
          <h2>TYPE</h2>
          <p>
            <input type='checkbox' value='Topwear'  />Topwear
          </p>
          <br />
          <p>
            <input type='checkbox' value='Bottomwear'  />Bottomwear
          </p>
          <br />
          <p>
            <input type='checkbox' value='Winterwear'  />Winterwear
          </p>
        </div>
      </div>

      <div className='clothes'>
        <div className='head'>
          <h1>
            <span>ALL</span> COLLECTIONS ─────
          </h1>
          <div className='sort'>
            <select >
              <option value='Relavent'>Sort by: Relavent</option>
              <option value='Low To High'>Sort by: Low To High</option>
              <option value='High To Low'>Sort by: High To Low</option>
            </select>
          </div>
        </div>

        <div className='clothe'>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className='product'>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;