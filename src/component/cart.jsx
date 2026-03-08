import React from 'react'
import wishlist from '../assets/wishlist.png';
import eye from '../assets/eye.png';
import star from "../assets/star.svg";
import blanckstar from "../assets/blanck-star.svg";
import halfstar from "../assets/half-star.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

const Cart = (props) => {
const dispatch = useDispatch();

const rating = Number(props.rating) || 0;

const fullStars = Math.max(0, Math.floor(rating));
const hasHalfStar = rating % 1 !== 0;
const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
     
    <>

    <div className="flex-shrink-0 w-[220px] sm:w-[240px] lg:w-[270px]">

  {/* Image Box */}
  <div className="relative bg-[#F5F5F5] h-[200px] sm:h-[230px] lg:h-[250px] rounded-md overflow-hidden group">

    <div className="flex justify-center items-center h-full p-4">
      <img
        className="max-h-[150px] sm:max-h-[170px] lg:max-h-[180px] object-contain"
        src={props.img}
        alt="product"
      />
    </div>

    {/* Add To Cart */}
    <button onClick={() =>{
    alert("Added To Cart Sucessfully 👍");
    dispatch(
      addToCart({
        id: props.id,
        name: props.productname,
        price: props.price,
        img: props.img
      })
    )
  }}
    className="absolute bottom-0 left-0 w-full h-[45px] 
                       bg-black text-white 
                       hidden group-hover:flex 
                       items-center justify-center 
                       text-sm transition cursor-pointer"
                       >
      Add To Cart
    </button>

    {/* Discount */}
    {props.discount && (
      <p className="absolute top-2 left-2 bg-[#DB4444] 
                    text-white text-xs px-2 py-1 rounded">
        {props.discount}
      </p>
    )}

    {/* Icons */}
    <div className="absolute top-2 right-2 flex flex-col gap-2">
      <img className="w-5 sm:w-6 cursor-pointer" src={wishlist} alt="wishlist" />
      <img className="w-5 sm:w-6 cursor-pointer" src={eye} alt="view" />
    </div>

  </div>

  {/* Details */}
  <div className="mt-3 space-y-1">
    <h4 className="text-sm sm:text-base font-medium">
      {props.productname}
    </h4>

    <div className="flex gap-2 items-center text-sm">
      <p className="font-semibold">${props.price}</p>
      {props.oldprice && (
        <p className="line-through text-gray-400">
          {props.oldprice}
        </p>
      )}
    </div>
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
    </>
  )
}
    

export default Cart
