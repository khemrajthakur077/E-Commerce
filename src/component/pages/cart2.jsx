import React from 'react'
import wishlist from '../../assets/wishlist.png';
import eye from '../../assets/eye.png';

const Cart2 = (props) => {
  return (
     
    <>
      <div className='flex justify-center items-center'>
        <div  className=''>
            <div className='h-[250px] w-[270px] bg-[#F5F5F5] relative group'>
           <div className='flex justify-center items-center h-full '>
           <img className='h-[180px]' src={props.img} alt="image" /> </div>  {/*change */}
           <button className= 'absolute bottom-0 flex justify-center items-center bg-black text-white w-full h-[50px] hidden group-hover:flex cursor-pointer'>Add To Cart</button>
           
           <img className='absolute right-2 top-[8px] cursor-pointer' src={wishlist} alt="wishlist" />
           <img className='absolute right-2 top-[50px] cursor-pointer' src={eye} alt="image" />
            </div>
           <h4>{props.productname}</h4>   {/*change */}
           <div className='flex gap-3'><p>{props.price}</p>  {/*change */}
           <div className='flex items-center'>
            <img className='h-[20px] w-[20px]' src={props.star1} alt="star" />
            <img className='h-[20px] w-[20px]' src={props.star2} alt="star" />
            <img className='h-[20px] w-[20px]' src={props.star3} alt="star" />
            <img className='h-[20px] w-[20px]' src={props.star4} alt="star" />
            <img className='h-[20px] w-[20px]' src={props.star5} alt="star" />
            <p>{props.rating}</p>                  {/*change */}
           </div>
         </div>
        </div>

      </div>
    </>
  )
}
    

export default Cart2
