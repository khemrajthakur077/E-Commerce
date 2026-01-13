import React from "react";
import wishlist from '../../assets/heart.svg';
import Cart from "../../assets/Cart.svg";


const Header = ({ children }) => {
  return (
    <>
      {/* Top Sale Bar */}
      <div className="bg-black text-white flex justify-center items-center gap-4 p-2 text-sm">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <button className="underline">Shop Now</button>
      </div>

      {/* Main Header */}
      <header className="flex justify-between items-center px-10 py-4 border-b">
        <h1 className="text-2xl font-bold">Exclusive</h1>

        <nav>
          <ul className="flex gap-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Sign Up</li>
          </ul>
        </nav>
       

        {/* Search Bar */}
        <form className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-full px-4 py-1 pr-10 outline-none"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            🔍
          </button>
        </form>

         <div className="icons flex">
         <img src={wishlist} alt="wishlist" />
         <img src={Cart} alt="wishlist" />
         </div>
      </header>

      {children}

      <footer className="text-center p-4 border-t">
       <div>
        <h1></h1>
        <h4></h4>
        <p></p>
        <form className="relative w-60">
          <input
            type="text"
            placeholder="Enter your email"
            className="border rounded-full px-4 py-1 pr-10 outline-none"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            ➡️
          </button>
        </form>
        
       </div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
      </footer>
    </>
  );
};

export default Header;
