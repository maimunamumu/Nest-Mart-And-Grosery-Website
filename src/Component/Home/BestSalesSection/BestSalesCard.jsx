import React from 'react';
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/CartSlice';

const BestSalesCard = ({product}) => {
  const { image,
    label,
    labelColor,
    category,
    name,
    brand,
    rating,
    price,
    oldPrice,
    sold,
    progress,} = product;

  const dispatch =useDispatch();
 

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full relative  cursor-pointer">
     
        <div
          className={`absolute -top-0.5 -left-0.5 text-xs text-white px-4 py-2 rounded-tl-lg rounded-br-lg font-medium ${labelColor}`}>
          {label}
        </div>
     

      <div className="mb-3 w-[200px]">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-contain rounded-lg"
        />
      </div>

      <p className="text-xs text-gray-500 mb-1">{category}</p>

     
      <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
        {name}
      </h3>

    
       <div className="flex items-center gap-1 mb-2">
       <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
       <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
       <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
       <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
       <FaStar className="w-4 h-4 text-gray-300" />
       <span className="text-xs text-gray-600 ml-1">({rating})</span>
     </div>

      <p className="text-xs text-gray-500 mb-3">By <span className='text-[#3BB77E]'>{brand}</span></p>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-green-600">${price}</span>
        
          <span className="text-sm text-gray-500 line-through">${oldPrice}</span>
       </div>
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Sold: {sold}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-green-500 h-1.5 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <button className="mt-4 bg-[#29A56C] text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-200 transition text-xs font-medium" onClick={()=>dispatch(addToCart(product))}>
        <FaShoppingCart className="w-4 h-4" />
        Add To Cart
      </button>
    </div>
 
    );
};

export default BestSalesCard;