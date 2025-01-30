"use client";

import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.stockLevel,
      0
    );
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed!",
          "success"
        );
        router.push("/checkout");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Banner Section */}
      <div className="bg-[#F6F5FF] py-8 text-start px-4 sm:px-8 lg:px-64">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101750]">
          Shopping Cart
        </h1>
        <p className="text-sm mt-2 text-black">
          Home . Pages <span className="text-[#FB2E86]">. Shopping Cart</span>
        </p>
      </div>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-6 rounded-xl shadow-lg border border-gray-200"
            >
              <div className="flex items-center">
                {item.image && (
                  <Image
                    src={urlForImage(item.image).url()}
                    className="w-20 h-20 object-cover rounded-lg shadow-sm"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="ml-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-500">
                    Price:{" "}
                    <span className="text-gray-900 font-medium">
                      ${item.price}
                    </span>
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">
                      {item.stockLevel}
                    </span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-md"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center text-lg font-medium">
            Your cart is empty.
          </p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Total:</h2>
            <p className="text-xl font-bold text-gray-900">
              ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-transform duration-200"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;