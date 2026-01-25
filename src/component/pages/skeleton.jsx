import React from "react";
import wishlist from '../../assets/heart.svg';
import Cart from "../../assets/Cart.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import QRcode from '../../assets/scanner.png';
import FBicon from '../../assets/Icon-Facebook.png';
import Xicon from '../../assets/Icon-Twitter.png';
import INSTAicon from '../../assets/Icon-Instagram.png';
import LINKEDINicon from '../../assets/Icon-Linkedin.png';



const Header = ({ children }) => {
  return (
    <>
      {/* Top Sale Bar */}
      <div className="bg-black text-white flex justify-center items-center gap-4 p-2 text-sm">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <button className="underline">Shop Now</button>
      </div>

      {/* Main Header */}
      <header className="flex justify-between items-center px-[50px] py-4 border-b">
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
       {/* footer section*/}
      <footer className=" p-4 border-t bg-black text-white">
         <div className="flex justify-around">
       <div>
        <h1 className="text-sm font-bold lg:text-2xl">Exclusive</h1>
        <h4 className="text-sm lg:text-xl">Subscribe</h4>
        <p className=" lg:text-base">Get 10% off your first order</p>
        <form className="relative w-60  hidden md:block">
          <input
            type="text"
            placeholder="Enter your email"
            className="border rounded-sm px-4 py-1 pr-6 outline-none"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            ➡️
          </button>
        </form>
       </div>


       <div>
        <h4 className="text-sm lg:text-xl">Support</h4>
        <p className=" lg:text-base">111 Bijoy sarani, Dhaka,  DH 1515, India.</p>
        <p className=" lg:text-base">exclusive@gmail.com</p>
        <p className=" lg:text-base">+88015-88888-9999</p>
       </div>


       <div>
        <h4 className="lg:text-xl">Account</h4>
        <p className=" lg:text-base">My Account</p>
        <p className=" lg:text-base">Login / Register</p>
        <p className=" lg:text-base">Cart</p>
        <p className=" lg:text-base">Wishlist</p>
        <p className=" lg:text-base">Shop</p>
       </div>


       <div>
        <h4 className="lg:text-xl">Quick Link</h4>
        <p className=" lg:text-base">Privacy Policy</p>
        <p className=" lg:text-base">Terms Of Use</p>
        <p className=" lg:text-base">FAQ</p>
        <p className=" lg:text-base">Contact</p>
       </div>


       <div>
        <h4 className="lg:text-xl">Download App</h4>
        <p className="text-gray-500 lg:text-base">Save $3 with App New User Only</p>
        <img src={QRcode} alt="scanner" />
        <div className="flex gap-6 pt-4">
        <img src={FBicon} alt="facebook" />
        <img src={Xicon} alt="twitter" />
        <img src={INSTAicon} alt="instagram" />
        <img src={LINKEDINicon} alt="linked-in" />
       </div>
       </div>
       </div> 


        <div className="flex justify-center items-center mt-15">
            <FontAwesomeIcon
          icon={faCopyright}
         className="text-gray-500 text-sm"
          />

       <p className="text-gray-500 text-sm">Copyright Rimel 2022. All right reserved</p>
        </div>   
      </footer>
    </>
  );
};

export default Header;
