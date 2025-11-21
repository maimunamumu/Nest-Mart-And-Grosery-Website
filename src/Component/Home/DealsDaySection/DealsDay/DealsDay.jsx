import React, { useEffect, useState } from 'react';
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io';
import { addToCart } from '../../../../Redux/CartSlice';
import { useDispatch } from 'react-redux';

const DealsDay = ({ products }) => {
  const dispatch=useDispatch()
  const targetDate = new Date("2025-12-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mx-auto container lg:px-8 px-5 mt-15 mb-15">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#18181B]">Deals Of The Day</h1>
        <div className="flex items-center gap-2 hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 duration-300">
          <p className="text-[15px]">All Deals</p>
          <p><IoIosArrowForward /></p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-14 mb-30 mt-5">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="relative flex justify-center">
            {/* Product Image */}
            <div>
              <img
                className="w-full max-w-[320px] rounded-lg"
                src={product.bgImg}
                alt=""
              />
            </div>

            {/* Countdown */}
            <div className="grid grid-flow-col absolute top-22  lg:top-23 gap-2 text-center auto-cols-max mx-auto">
              <div className="flex flex-col p-3 bg-white rounded-md shadow-md text-[#97A3A7]">
                <span className="countdown font-mono text-2xl text-[#3BB77E]">
                  <span style={{ "--value": timeLeft.days }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-3 bg-white rounded-md shadow-md text-[#97A3A7]">
                <span className="countdown font-mono text-2xl text-[#3BB77E]">
                  <span style={{ "--value": timeLeft.hours }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-3 bg-white rounded-md shadow-md text-[#97A3A7]">
                <span className="countdown font-mono text-2xl text-[#3BB77E]">
                  <span style={{ "--value": timeLeft.minutes }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-3 bg-white rounded-md shadow-md text-[#97A3A7]">
                <span className="countdown font-mono text-2xl text-[#3BB77E]">
                  <span style={{ "--value": timeLeft.seconds }}></span>
                </span>
                sec
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 shadow-md absolute rounded-md bg-white w-[85%] sm:w-60 top-[65%] sm:top-45">
              <h2 className="text-[13px] text-[#253D4E]">{product.name}</h2>
              <div className="text-[#FDC040] flex items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-[#B6B6B6]" />
                <p className="text-[#B6B6B6] ml-2">({product.rating})</p>
              </div>
              <p className="text-[#B6B6B6] text-sm">
                By : <span className="text-[#3BB77E]">{product.brand}</span>
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-green-600">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.oldPrice}
                  </span>
                </div>
                <button className="bg-green-100 text-green-700 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-200 transition text-xs font-medium px-2" onClick={()=>dispatch(addToCart(product))}>
                  <FaShoppingCart />
                  <p>Add</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsDay;
