import { useState, useEffect } from 'react';
import getProducts from '../services/product.service';

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <div className='flex flex-wrap justify-center p-4'>
        {products.map((product) => (
          <div
            key={product.id}
            className='mx-4 mb-4 w-72 flex flex-col border border-black rounded-md '
          >
            <img
              src={product.images} // Assuming your API provides an 'images' property for each product
              alt={product.title}
              className='w-full h-64 object-cover rounded-md'
            />
            <div className='p-4 flex-grow'>
              <p className='text-lg font-semibold mb-2'>{product.title}</p>
              <p className='text-gray-700 ellipsis-text '>
                {product.description}
              </p>
            </div>
            <div className='p-4'>
              <p className='text-blue-500 font-bold'>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
