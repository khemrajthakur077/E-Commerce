import React from 'react'
import wishlist from '../assets/wishlist.png';
import eye from '../assets/eye.png';
import star from "../assets/star.svg";
import blanckstar from "../assets/blanck-star.svg";
import halfstar from "../assets/half-star.svg";

const Cart2 = (props) => {
  const rating = Number(props.rating) || 0;

const fullStars = Math.max(0, Math.floor(rating));
const hasHalfStar = rating % 1 !== 0;
const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));
  return (
     
    <>
      <div className="flex justify-center items-center flex-shrink-0 
                w-[220px] sm:w-[240px] lg:w-[270px]">
  <div>

    <div className="h-[200px] sm:h-[230px] lg:h-[250px] 
                    w-full 
                    bg-[#F5F5F5] relative group rounded-md overflow-hidden">

      <div className="flex justify-center items-center h-full p-4">
        <img
          className="max-h-[150px] sm:max-h-[170px] lg:max-h-[180px] object-contain"
          src={props.img}
          alt="image"
        />
      </div>

      <button className="absolute bottom-0 flex justify-center items-center 
                         bg-black text-white w-full h-[45px] 
                         hidden group-hover:flex cursor-pointer text-sm transition">
        Add To Cart
      </button>

      <img className="absolute right-2 top-2 w-5 sm:w-6 cursor-pointer"
           src={wishlist}
           alt="wishlist" />

      <img className="absolute right-2 top-12 w-5 sm:w-6 cursor-pointer"
           src={eye}
           alt="image" />
    </div>

    <h4 className="mt-3 text-sm sm:text-base font-medium">
      {props.productname}
    </h4>

    <div className="flex gap-3 items-center text-sm">
      <p className="font-semibold">${props.price}</p>

       <div className="flex items-center gap-1">
      
        {[...Array(fullStars)].map((_, i) => (
          <img key={`full-${i}`} src={star} className="w-4 h-4" />
        ))}
      
        {hasHalfStar && (
          <img key="half" src={halfstar} className="w-4 h-4" />
        )}
      
        {[...Array(emptyStars)].map((_, i) => (
          <img key={`empty-${i}`} src={blanckstar} className="w-4 h-4" />
        ))}
      
        <span className="text-sm text-gray-500 ml-1">
          ({props.reviews})
        </span>
      
      </div>
      
    </div>



  </div>
</div>
    </>
  )
}
    

export default Cart2
