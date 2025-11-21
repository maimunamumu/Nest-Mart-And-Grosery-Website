import React from 'react';
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router';
import { addToCart } from '../../../../Redux/CartSlice';
import { useDispatch } from 'react-redux';

const ShopCard = ({product}) => {
  const dispatch =useDispatch()
       const { image,label, labelColor,category,name, brand,rating,price,oldPrice} = product;
    return (
        <div>
           
        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md   relative">
      <div
          className={`absolute -top-0.5 -left-0.5 text-xs text-white px-3 py-1 rounded-tl-lg rounded-br-lg font-medium ${labelColor}`}>
          {label}
        </div>

    
       <Link to={`/product/${product.id}`}>
         <div className="mb-3">
        <img src={image}
          alt={name}
          className="lg:w-40 w-100 h-70 lg:h-40 object-contain rounded-lg"
        />
      </div>
       </Link>

    
      <p className="lg:text-xs text-sm text-gray-500 mb-1">{category}</p>

      <h3 className="lg:text-xs text-sm font-semibold hover:text-[#3BB77E] text-[#253D4E]  mb-2">
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

     
      <p className="lg:text-xs text-sm text-gray-500  mb-3">By <span className='text-[#3BB77E]'>{brand}</span></p>

     <div className='flex justify-between items-center'>
  <div className="flex items-center gap-2 mb-2">
        <span className="lg:text-xs text-sm font-bold text-green-600">${price}</span>
          <span className="lg:text-xs text-sm text-gray-500 line-through">${oldPrice}</span>
      
      </div>
      <button className=" bg-green-100 text-green-700 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-200 transition lg:text-xs text-lg font-medium px-2" onClick={()=>dispatch(addToCart(product))}>
        <FaShoppingCart />
        <p>Add</p>
       
      </button>
     </div>
    
    </div>
     
        </div>
    );
};

export default ShopCard;