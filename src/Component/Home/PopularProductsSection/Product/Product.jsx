import React from 'react';
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {addToCart} from "../../../../Redux/CartSlice"
import{addToWishlist} from "../../../../Redux/WishList"

const Product = ({ product }) => {
  const dispatch =useDispatch();

  const { image, label, labelColor, category, name, brand, rating, price, oldPrice } = product;
  return (
   
      <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 relative">
        
        {/* Label */}
        <div
          className={`absolute top-0 left-0 text-[10px] sm:text-xs text-white px-3 sm:px-4 py-1 sm:py-2 rounded-tl-lg rounded-br-lg font-medium ${labelColor}`}
        >
          {label}
        </div>

        {/* Image */}
       <Link to={`product/${product.id}`}>
        <div className="mb-3 flex justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-40 sm:h-52 md:h-60 object-contain rounded-lg"
          />
        </div>

      </Link>
        {/* Category */}
        <p className="text-[10px] sm:text-xs text-gray-500 mb-1">{category}</p>

        {/* Name */}
        <h3 className="text-sm sm:text-base font-semibold hover:text-[#3BB77E] text-[#253D4E] mb-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <FaStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300" />
          <span className="text-[11px] sm:text-xs text-gray-600 ml-1">({rating})</span>
        </div>

        {/* Brand */}
        <p className="text-[11px] sm:text-xs text-gray-500 mb-3">
          By <span className="text-[#3BB77E]">{brand}</span>
        </p>

        {/* Price & Button */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm sm:text-base font-bold text-green-600">${price}</span>
            <span className="text-xs sm:text-sm text-gray-500 line-through">${oldPrice}</span>
          </div>

        
        </div>
        <div className='flex gap-3'>
            <button className="bg-green-100 text-green-700 py-1.5 sm:py-2 rounded-md flex items-center justify-center gap-1 sm:gap-2 hover:bg-green-200 transition text-[11px] sm:text-sm font-medium px-2 sm:px-3" onClick={()=>dispatch(addToCart(product))}>
            <FaShoppingCart className="text-xs sm:text-sm" />
          
          </button>
          <button className="bg-green-100 text-green-700 py-1.5 sm:py-2 rounded-md flex items-center justify-center gap-1 sm:gap-2 hover:bg-green-200 transition text-[11px] sm:text-sm font-medium px-2 sm:px-3" onClick={()=>dispatch(addToWishlist(product))}>
            <FaHeart className="text-xs sm:text-sm" />
            
          </button>
        </div>
      </div>
   
  );
};

export default Product;
