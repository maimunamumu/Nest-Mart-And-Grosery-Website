import React, { useState } from 'react';
import Product from '../Product/Product';

const Products = ({ products }) => {

  const [selected, setSelected] = useState(null);

  const handleSelected = (id) => {
    setSelected(id);
  };

  const filterData = selected
    ? products.filter((product) => product.id === selected)
    : products;

  return (
    <div className="mx-auto container lg:px-8 px-4 mt-12 mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-[#253D4E] text-2xl sm:text-3xl font-semibold">
          Popular Products
        </h1>

        {/* Filter Menu */}
        <div className="flex flex-wrap justify-start sm:justify-end gap-3 text-sm">
          <p
            className={`cursor-pointer ${
              !selected
                ? 'text-[#3BB77E] font-medium transition-transform duration-300 hover:-translate-y-1'
                : 'text-gray-600 hover:text-[#3BB77E]'
            }`}
            onClick={() => setSelected(null)}
          >
            All
          </p>

          {products.slice(0, 7).map((product) => (
            <p
              key={product.id}
              className={`cursor-pointer ${
                selected === product.id
                  ? 'text-[#3BB77E] font-medium transition-transform duration-300 hover:-translate-y-1'
                  : 'text-gray-600 hover:text-[#3BB77E]'
              }`}
              onClick={() => handleSelected(product.id)}
            >
              {product.category}
            </p>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div
        className="
          grid 
          grid-cols-1 
         
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-4 
          mt-8
        "
      >
        {filterData.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
