"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SearchBar from "./Search";

const Header: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = e.target.value;
    if (selectedPage) {
      router.push(selectedPage);
    }
  };

  return (
    <div className="lg:max-w-[1520px] w-full">
      {/* Top Banner */}
      <div className="bg-[#7E33E0] text-white text-xs sm:text-sm flex flex-col md:flex-row justify-between items-center py-2 px-4 sm:px-8">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <a href="mailto:mk7275374@gmail.com" className="hover:text-gray-300 flex gap-1">
            <CiMail className="mt-1" /> <span>mk7275374@gmail.com</span>
          </a>
          <a href="tel:+923313007384" className="hover:text-gray-300 flex gap-1">
            <FiPhoneCall className="mt-1" /> <span>+92 331 3007384</span>
          </a>
        </div>

        {/* Login & Cart */}
        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="flex gap-1 font-serif">
            Login <IoMdLogIn className="mt-1" />
          </Link>
          <Link href="/cart" className="text-lg">
            <RiShoppingCart2Line className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md px-4 sm:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800">
          Hekto
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-5 text-gray-700">
            <li>
              <select className="text-pink-600 cursor-pointer" defaultValue="" onChange={handleNavigation}>
                <option value="/">Home</option>
                <option value="/contact">Contact</option>
                <option value="/about">About</option>
                <option value="/faq">Faq</option>
                <option value="/cart">Cart</option>
                <option value="/checkout">Checkout</option>
              </select>
            </li>
            <li><Link href="/grid" className="hover:text-gray-700">Products</Link></li>
            <li><Link href="/blog" className="hover:text-gray-700">Blog</Link></li>
            <li><Link href="/shop" className="hover:text-gray-700">Shop</Link></li>
            <li><Link href="/contact" className="hover:text-gray-700">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>

        {/* Search Bar */}
        <div className="hidden sm:block">
          <SearchBar />
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-5">
          <ul className="flex flex-col gap-3 text-center text-gray-700">
            <li>
              <select className="text-pink-600 cursor-pointer w-full" defaultValue="" onChange={handleNavigation}>
                <option value="/">Home</option>
                <option value="/contact">Contact</option>
                <option value="/about">About</option>
                <option value="/faq">Faq</option>
                <option value="/cart">Cart</option>
                <option value="/checkout">Checkout</option>
              </select>
            </li>
            <li><Link href="/grid" onClick={() => setMobileMenuOpen(false)}>Products</Link></li>
            <li><Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link></li>
            <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

