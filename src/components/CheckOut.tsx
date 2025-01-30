"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import { Product } from "@/types/product";
import { urlForImage } from "@/sanity/lib/image";

export default function Checkout() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.stockLevel,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      alert("Order placed successfully!");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 mt-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Checkout</h2>

        {/* Order Summary */}
        <div className="mb-6 p-4 border rounded-lg shadow-sm bg-gray-100">
          <h3 className="text-lg font-semibold text-gray-700">Order Summary</h3>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 py-3 border-b"
              >
                <Image
                  src={urlForImage(item.image).url()}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Quantity: {item.stockLevel}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  ${item.price * item.stockLevel}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          )}
          <div className="text-right mt-4">
            <p className="text-sm">
              Subtotal:{" "}
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </p>
            <p className="text-sm">
              Discount: <span className="font-medium">-${discount}</span>
            </p>
            <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
          </div>
        </div>

        {/* Billing Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Billing Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.keys(formValues).map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  placeholder={`Enter your ${field}`}
                  value={formValues[field as keyof typeof formValues]}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
                {formErrors[field as keyof typeof formErrors] && (
                  <p className="text-sm text-red-500">{`${field.charAt(0).toUpperCase() + field.slice(1)} is required.`}</p>
                )}
              </div>
            ))}
          </div>

          <button
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring focus:ring-blue-300"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
