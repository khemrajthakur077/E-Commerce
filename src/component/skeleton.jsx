import React, { useState } from "react";
import wishlist from '../assets/heart.svg';
import Cart from "../assets/Cart.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import QRcode from '../assets/scanner.png';
import FBicon from '../assets/Icon-Facebook.png';
import Xicon from '../assets/Icon-Twitter.png';
import INSTAicon from '../assets/Icon-Instagram.png';
import LINKEDINicon from '../assets/Icon-Linkedin.png';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




const Header = ({ children }) => {
  const [navOpen , setNavOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return (
    <>
      {/* Top Sale Bar */}
      <div className="bg-black text-white flex justify-center items-center gap-4 p-2 text-sm">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <button className="underline">Shop Now</button>
      </div>

      {/* Main Header */}
    <header className="relative flex items-center justify-between px-4 md:px-[50px] py-4 border-b">

  {/* Left Section */}
  <div className="flex items-center gap-6">
    <h1 className="text-xl md:text-2xl font-bold">Exclusive</h1>

    {/* Desktop Nav */}
    <nav className="hidden lg:block">
      <ul className="flex gap-6">
        <Link to="/" >  <li className="cursor-pointer hover:text-red-500 transition">Home</li></Link>
        <Link to="/contact" ><li className="cursor-pointer hover:text-red-500 transition">Contact</li> </Link>
        <Link to="/about" ><li className="cursor-pointer hover:text-red-500 transition">About</li> </Link>
        <Link to="/signup" ><li className="cursor-pointer hover:text-red-500 transition">Sign Up</li> </Link>
      </ul>
    </nav>
  </div>

  {/* Right Section */}
  <div className="flex items-center gap-4">

    {/* Search (hidden on small screen) */}
    <form className="relative hidden sm:block">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-full px-4 py-2 pr-10 outline-none w-48 lg:w-64"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        🔍
      </button>
    </form>

    {/* Icons */}
    <img className="w-6 cursor-pointer" src={wishlist} alt="wishlist" />
    <div className="relative">
    <Link to="/cart">
  <img className="w-6 cursor-pointer" src={Cart} alt="cart" />
    </Link>
     {/* count badge */}

      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 
                         bg-red-500 text-white 
                         text-xs w-5 h-5 
                         flex items-center justify-center 
                         rounded-full">
          {cartCount}
        </span>
      )}
    </div>
    {/* Mobile Toggle */}
    <button
      className="lg:hidden text-2xl"
      onClick={() => setNavOpen(!navOpen)}
    >
      ☰
    </button>

  </div>

  {/* Mobile Menu */}
  {navOpen && (
    <nav className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-md z-50">
      <ul className="flex flex-col gap-4 py-4 text-center font-medium">
       <li onClick={() => setNavOpen(false)}>
  <Link to="/">Home</Link>
</li>

<li onClick={() => setNavOpen(false)}>
  <Link to="/contact">Contact</Link>
</li>

<li onClick={() => setNavOpen(false)}>
  <Link to="/about">About</Link>
</li>

<li onClick={() => setNavOpen(false)}>
  <Link to="/signup">Sign Up</Link>
</li>
      </ul>
    </nav>
  )}

</header>
      {children}
       {/* footer section*/}
     <footer className="bg-black text-white px-4 md:px-10 py-10">

  <div className="flex flex-col lg:flex-row 
                  items-center lg:items-start 
                  text-center lg:text-left 
                  gap-10 lg:gap-20">

    {/* Column 1 */}
    <div className="max-w-xs">
      <h1 className="text-xl font-bold mb-2">Exclusive</h1>
      <h4 className="text-lg mb-2">Subscribe</h4>
      <p className="text-sm mb-3">Get 10% off your first order</p>

      <form className="relative w-full">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full border rounded px-4 py-2 pr-8 outline-white text-white"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          ➡️
        </button>
      </form>
    </div>

    {/* Column 2 */}
    <div className="max-w-xs">
      <h4 className="text-lg mb-2">Support</h4>
      <p className="text-sm">111 Bijoy sarani, Dhaka, India.</p>
      <p className="text-sm">exclusive@gmail.com</p>
      <p className="text-sm">+88015-88888-9999</p>
    </div>

    {/* Column 3 */}
    <div className="max-w-xs">
      <h4 className="text-lg mb-2">Account</h4>
      <p className="text-sm">My Account</p>
      <p className="text-sm">Login / Register</p>
      <p className="text-sm">Cart</p>
      <p className="text-sm">Wishlist</p>
    </div>

    {/* Column 4 */}
    <div className="max-w-xs">
      <h4 className="text-lg mb-2">Quick Link</h4>
      <p className="text-sm">Privacy Policy</p>
      <p className="text-sm">Terms Of Use</p>
      <p className="text-sm">FAQ</p>
      <p className="text-sm">Contact</p>
    </div>

    {/* Column 5 */}
    <div className="max-w-xs flex flex-col items-center lg:items-start">
      <h4 className="text-lg mb-2">Download App</h4>
      <p className="text-gray-400 text-sm mb-3">
        Save $3 with App New User Only
      </p>
      <img className="mb-4 w-28" src={QRcode} alt="scanner" />
      <div className="flex gap-4 justify-center lg:justify-start">
        <img className="w-6" src={FBicon} alt="facebook" />
        <img className="w-6" src={Xicon} alt="twitter" />
        <img className="w-6" src={INSTAicon} alt="instagram" />
        <img className="w-6" src={LINKEDINicon} alt="linkedin" />
      </div>
    </div>

  </div>

  {/* Bottom Section */}
  <div className="flex justify-center items-center gap-2 mt-10 text-gray-400 text-sm text-center">
    <FontAwesomeIcon icon={faCopyright} />
    <p>Copyright Rimel 2022. All right reserved</p>
  </div>

</footer>
    </>
  );
};

export default Header;
