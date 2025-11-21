import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../../Redux/CartSlice";
import { removeToWishlist } from "../../Redux/WishList";

const DashBoard = () => {
  const CartItems = useSelector((state) => state.Cart.items);
  const WishListItems = useSelector((state) => state.WishList.items);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto container px-4 md:px-6 lg:px-30 my-8">
      <h1 className="text-2xl font-bold mb-5 text-center">
        🛒 Your Cart & Wishlist
      </h1>
      <hr className="text-gray-300 mb-6" />

      {/* MAIN FLEX */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* CART COLUMN */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">🛒 Cart Items ({CartItems.length})</h2>
          <div className="space-y-4">
            {CartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <div className="mt-1">
                    <span className="text-green-600 font-bold">${item.price}</span>
                    {item.oldPrice && (
                      <span className="text-gray-400 text-sm line-through ml-2">
                        ${item.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeToCart(item))}
                  className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* WISHLIST COLUMN */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">❤️ Wishlist ({WishListItems.length})</h2>
          <div className="space-y-4">
            {WishListItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <div className="mt-1">
                    <span className="text-green-600 font-bold">${item.price}</span>
                    {item.oldPrice && (
                      <span className="text-gray-400 text-sm line-through ml-2">
                        ${item.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeToWishlist(item))}
                  className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
