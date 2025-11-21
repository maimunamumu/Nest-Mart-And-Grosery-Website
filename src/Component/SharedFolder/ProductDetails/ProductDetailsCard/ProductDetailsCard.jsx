import React from 'react';
import { FaStar, FaShoppingCart, FaHeart, FaExchangeAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../Redux/CartSlice';
import { addToWishlist } from '../../../../Redux/WishList';

const ProductDetailsCard = ({product}) => {
  const dispatch =useDispatch()

     const {
    label,
    labelColor,
    name,
    rating,
    price,
    oldPrice,
    image
  } = product;
    return (
        <div className="grid md:grid-cols-2 gap-10 py-10">
      {/* Left side - Product Image */}
      <div className="bg-gray-50 flex justify-center items-center rounded-lg shadow-md relative p-4">
      
          <span
            className={`absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded ${labelColor}`}
          >
            {label}
          </span>
       
        <img
          src={image}
          alt={name}
          className="max-h-[420px] object-contain"
        />
      </div>

      {/* Right side - Product Info */}
      <div className="flex flex-col justify-center space-y-5">
        {/* Product Name */}
        <h2 className="text-3xl font-semibold text-gray-800 leading-snug">
          {name || "Seeds of Change Organic Quinoa, Brown"}
        </h2>

        {/* Rating */}
           <div className="flex items-center gap-1 mb-2">
          <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-4 h-4 text-gray-300" />
          <span className="text-xs text-gray-600 ml-1">({rating})</span>
        </div>
        {/* Price */}
        <div className="flex items-center space-x-3">
          <span className="text-4xl font-bold text-green-600">
            ${price}
          </span>
          <span className="text-gray-400 line-through text-lg">
            ${oldPrice}
          </span>
          <span className="text-orange-500 font-medium text-sm">
            26% Off
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
          officia, corrupti reiciendis minima nisi modi, quasi, odio minus
          dolore impedit fuga eum eligendi.
        </p>

        {/* Size / Weight */}
        <div>
          <p className="font-medium text-gray-800 mb-2">Size / Weight:</p>
          <div className="flex gap-3">
            {["50g", "60g", "80g", "100g", "150g"].map((size, index) => (
              <button
                key={index}
                className={`border rounded-md px-4 py-1 text-sm font-medium ${
                  size === "60g"
                    ? "bg-green-600 text-white"
                    : "border-gray-300 text-gray-600 hover:border-green-600"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Buttons */}
        <div className="flex items-center gap-4 mt-4">
          {/* Quantity selector */}
          <div className="flex items-center border border-gray-300 rounded-md">
            <button className="px-3 py-2 text-gray-500 hover:text-black">-</button>
            <input
              type="text"
              value="1"
              readOnly
              className="w-10 text-center text-gray-800 outline-none"
            />
            <button className="px-3 py-2 text-gray-500 hover:text-black">+</button>
          </div>

          {/* Add to Cart */}
          <button className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-md font-medium hover:bg-green-700" onClick={()=>dispatch(addToCart(product))}>
            <FaShoppingCart /> Add to cart
          </button>

          {/* Heart + Exchange Icons */}
          <button className="p-2 border rounded-md hover:bg-gray-100" onClick={()=>dispatch(addToWishlist(product))}>
            <FaHeart className="text-gray-500" />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-100">
            <FaExchangeAlt className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
    );
};

export default ProductDetailsCard;