import React from 'react'
import Products from '../component/products';
import useHorizontalScroll from '../component/horizontalScroll';
import Heroimg from'../assets/hero-img.png';
import phones from '../assets/phones.png';
import computers from '../assets/computers.png';
import smartwatch from '../assets/smartwatch.png';
import camera from '../assets/camera.png';
import headphones from '../assets/headphones.png';
import gaming from '../assets/gaming.png';
// speacial offer
import blackbuffer from '../assets/buffer-sale.png';
// grid section images
import playStation from '../assets/play-station-5.png';
import womenCollection from '../assets/women-collection.png';
import speakers from '../assets/speakers.png';
import gucciPerfumes from '../assets/gucci-perfumes.png';
// services
import Delevery from '../assets/delevery.png';
import CustomerCare from '../assets/customer-care.png';
import Trust from '../assets/trust.png';
// arrow
import LeftArrow from '../assets/left-arrow.png';
import RightArrow from '../assets/right-arrow.png';
// Counter
import {useDispatch , useSelector } from 'react-redux'
import { decreament, incriment } from '../store/slices/CounterSlice';
// import use state
import { useState } from 'react';





const Home = () => {
  // side bar use state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // side bar use state end
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()



// scroll flash sale section
const {
  ref: flashSaleRef,
  scrollLeft: flashLeft,
  scrollRight: flashRight,
}= useHorizontalScroll(300);

// scroll category section
const {
  ref: Category,
  scrollLeft: categoryLeft,
  scrollRight: categoryRight,
}=useHorizontalScroll(200);

  return (
    <>  
<button aria-level="incriment value" onClick={()=> dispatch(incriment())}>
incriment
</button>
<button aria-level="decrease value" onClick={()=> dispatch(decreament())}>
decreament
</button>
<span>{count}</span>


   
    <div className="relative flex w-full">

  {/* Toggle Button (Below 1100px only) */}
  <button
    onClick={() => setSidebarOpen(true)}
    className="absolute min-[1100px]:hidden p-3 text-2xl"
  >
    ➡️
  </button>

  {/* Sidebar */}
  <div
    className={`
      fixed top-0 left-0 h-full w-64 bg-white z-50
      transform transition-transform duration-300
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      min-[1100px]:static 
      min-[1100px]:translate-x-0
      min-[1100px]:w-[19%]
      min-[1100px]:flex
      flex flex-col pt-10 pl-[50px] gap-4
    `}
  >
    {/* Close Button (Mobile only) */}
    <div className="flex justify-end p-4 min-[1100px]:hidden">
      <button onClick={() => setSidebarOpen(false)}>✕</button>
    </div>

    <p>Woman’s Fashion</p>
    <p>Men’s Fashion</p>
    <p>Electronics</p>
    <p>Home & Lifestyle</p>
    <p>Medicine</p>
    <p>Sports & Outdoor</p>
    <p>Baby’s & Toys</p>
    <p>Groceries & Pets</p>
    <p>Health & Beauty</p>
  </div>

  {/* Overlay (Mobile only) */}
  {sidebarOpen && (
    <div
      onClick={() => setSidebarOpen(false)}
      className="fixed inset-0 bg-black/40 min-[1100px]:hidden"
    />
  )}

  {/* Divider */}
  <div className="hidden min-[1100px]:block w-px h-96 bg-black ml-10"></div>

  {/* Hero Section */}
  <div className="w-full min-[1100px]:w-[80%] pt-10 px-4 min-[1100px]:pl-10 pb-[50px]">
    <img
      src={Heroimg}
      alt="hero-image"
      className="w-full h-auto"
    />
  </div>

</div>

       {/* cart section flash sales */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-[50px]">

  {/* Small Red Label */}
  <div className="flex items-center gap-2 mb-3">
    <div className="h-6 w-3 md:h-8 md:w-4 bg-[#DB4444] rounded"></div>
    <p className="text-[#DB4444] text-sm md:text-base">
      Today’s
    </p>
  </div>

  {/* Heading + Arrows */}
  <div className="flex flex-col sm:flex-row 
                  sm:items-center 
                  sm:justify-between 
                  gap-4">

    <h1 className="font-bold 
                   text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
      Flash Sales
    </h1>

    <div className="flex gap-3 sm:gap-5">
      <button onClick={flashLeft}>
        <img className="w-6 sm:w-8" src={LeftArrow} alt="left" />
      </button>
      <button onClick={flashRight}>
        <img className="w-6 sm:w-8" src={RightArrow} alt="right" />
      </button>
    </div>

  </div>
</div>
     


    <div ref={flashSaleRef} className='flex my-9 px-[50px] gap-7  overflow-x-auto scroll-smooth hide-scrollbar'>
      {/* cart-1 */}
      <Products type="flash" />
    </div>




    {/* Categories section */}
   {/* Categories Header */}
<div className="px-4 sm:px-6 md:px-10 lg:px-[50px] my-9">

  {/* Label */}
  <div className="flex items-center gap-2 mb-3">
    <div className="h-6 w-3 md:h-8 md:w-4 bg-[#DB4444] rounded"></div>
    <p className="text-[#DB4444] text-sm md:text-base">
      Categories
    </p>
  </div>

  {/* Title + Arrows */}
  <div className="flex flex-col sm:flex-row 
                  sm:items-center 
                  sm:justify-between 
                  gap-4">

    <h1 className="font-bold 
                   text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
      Browse By Category
    </h1>

    <div className="flex gap-3 sm:gap-5">
      <button onClick={categoryLeft}>
        <img className="w-6 sm:w-8" src={LeftArrow} alt="left" />
      </button>
      <button onClick={categoryRight}>
        <img className="w-6 sm:w-8" src={RightArrow} alt="right" />
      </button>
    </div>

  </div>
</div>

{/* Categories Scroll Section */}
<div
  ref={Category}
  className="flex gap-5 sm:gap-7 
             px-4 sm:px-6 md:px-10 lg:px-[50px] 
             my-9 
             overflow-x-auto scroll-smooth hide-scrollbar"
>
  <img className="flex-shrink-0 w-24 sm:w-28 md:w-32 cursor-pointer hover:bg-red-300 rounded-md transition" src={phones} alt="phones" />
  <img className="flex-shrink-0 w-24 sm:w-28 md:w-32 cursor-pointer hover:bg-red-300 rounded-md transition" src={computers} alt="computers" />
  <img className="flex-shrink-0 w-24 sm:w-28 md:w-32 cursor-pointer hover:bg-red-300 rounded-md transition" src={smartwatch} alt="smartwatch" />
  <img className="flex-shrink-0 w-24 sm:w-28 md:w-32 cursor-pointer hover:bg-red-300 rounded-md transition" src={camera} alt="camera" />
  <img className="flex-shrink-0 w-24 sm:w-28 md:w-32 cursor-pointer hover:bg-red-300 rounded-md transition" src={headphones} alt="headphones" />
  <img className="flex-shrink-0 w-24 sm:w-28 md:w-32 cursor-pointer hover:bg-red-300 rounded-md transition" src={gaming} alt="gaming" />
</div>
    {/* best selling product */}
    {/* Header */}
<div className="px-4 sm:px-6 md:px-10 lg:px-[50px] my-9">

  {/* Label */}
  <div className="flex items-center gap-2 mb-3">
    <div className="h-6 w-3 md:h-8 md:w-4 bg-[#DB4444] rounded"></div>
    <p className="text-[#DB4444] text-sm md:text-base">
      This Month
    </p>
  </div>

  {/* Title */}
  <h1 className="font-bold 
                 text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
    Best Selling Products
  </h1>

</div>

{/* Scroll Section */}
<div className="flex gap-5 sm:gap-7 
                overflow-x-auto scroll-smooth hide-scrollbar 
                my-9 
                px-4 sm:px-6 md:px-10 lg:px-[50px]">
      <Products type="best" />
    </div>



   <div className="
  flex flex-col lg:flex-row
  items-center justify-between
  bg-gradient-to-r from-[#1a1a1a] via-[#0f0f0f] to-[#3A3A3A]
  mx-4 sm:mx-6 md:mx-10 lg:mx-[50px]
  px-6 sm:px-8 lg:px-[30px]
  py-10 lg:h-[400px]
  my-12 lg:my-[50px]
  rounded-lg
">

  {/* Left Content */}
  <div className="
    flex flex-col 
    justify-center 
    gap-6 
    text-center lg:text-left
    max-w-xl
  ">
    <p className="text-sm sm:text-base text-[#00FF66]">
      Categories
    </p>

    <h3 className="
      text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
      text-white font-bold
    ">
      Enhance Your Music Experience
    </h3>

    <button className="
      bg-[#00FF66] text-white 
      w-fit 
      px-6 py-2 
      rounded 
      mx-auto lg:mx-0
      hover:scale-105 transition
    ">
      Buy Now!
    </button>
  </div>

  {/* Right Image */}
  <div className="flex justify-center items-center mt-10 lg:mt-0">
    <img 
      src={blackbuffer} 
      alt="buffer image" 
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
    />
  </div>

</div>
    {/* explore our products */}
    {/* Section Header */}
<div className="px-4 sm:px-6 md:px-10 lg:px-[50px] my-9">

  {/* Label */}
  <div className="flex items-center gap-2 mb-3">
    <div className="h-6 w-3 md:h-8 md:w-4 bg-[#DB4444] rounded"></div>
    <p className="text-[#DB4444] text-sm md:text-base">
      Our Products
    </p>
  </div>

  {/* Title */}
  <h1 className="font-bold 
                 text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
    Explore Our Products
  </h1>

</div>

{/* Scroll Section */}
<div className="
  mx-4 sm:mx-6 md:mx-10 lg:mx-[50px]
  mb-12 lg:mb-[50px]
  flex items-center 
  gap-5 sm:gap-7
  flex-wrap justify-center
">
   <Products type="all"/>
    </div>

    <div className="flex justify-center items-center mb-10 lg:mb-[50px] px-4">

  <button className="
    w-full sm:w-auto
    px-6 sm:px-8 
    py-3
    bg-[#DB4444] 
    text-white 
    font-medium
    rounded-md
    transition-all duration-300
    hover:bg-red-600
    hover:scale-105
  ">
    View All Products
  </button>

</div>
     {/* new arrival section */}
  {/* Section Header */}
<div className="px-4 sm:px-6 md:px-10 min-[1000px]:px-[50px] my-9">
  <div className="flex items-center gap-2 mb-3">
    <div className="h-6 w-3 md:h-8 md:w-4 bg-[#DB4444] rounded"></div>
    <p className="text-[#DB4444] text-sm md:text-base">
      Featured
    </p>
  </div>

  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl min-[1000px]:text-[48px]">
    New Arrival
  </h1>
</div>


{/* Grid Section */}
<div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  gap-6 
  px-4 sm:px-6 md:px-10
  min-[1000px]:grid-cols-4
  min-[1000px]:gap-[20px]
  min-[1000px]:px-[50px]
  mb-12
">

  {/* Big Left Card */}
  <div className="
    bg-black flex justify-center items-center relative
    min-h-[250px]
    sm:min-h-[300px]
    min-[1000px]:col-span-2
  ">
    <img src={playStation} alt="image" className="object-contain max-h-[220px]" />
    <div className="absolute bottom-5 left-5 text-white">
      <h3 className="text-lg sm:text-xl min-[1000px]:text-[24px] font-bold">
        PlayStation 5
      </h3>
      <p className="text-xs sm:text-sm min-[1000px]:text-[14px]">
        Black and White version of the PS5 coming out on sale.
      </p>
      <button className="underline mt-2">Shop Now</button>
    </div>
  </div>


  {/* Women Collection */}
  <div className="
    bg-black flex justify-center items-center relative
    min-h-[220px]
    min-[1000px]:col-span-2
  ">
    <img src={womenCollection} alt="image" className="object-contain max-h-[200px]" />
    <div className="absolute bottom-5 left-5 text-white">
      <h3 className="text-lg sm:text-xl min-[1000px]:text-[24px] font-bold">
        Women’s Collections
      </h3>
      <p className="text-xs sm:text-sm min-[1000px]:text-[14px]">
        Featured woman collections that give you another vibe.
      </p>
      <button className="underline mt-2">Shop Now</button>
    </div>
  </div>


  {/* Speakers */}
  <div className="bg-black flex justify-center items-center relative min-h-[200px]">
    <img src={speakers} alt="image" className="object-contain max-h-[140px]" />
    <div className="absolute bottom-5 left-5 text-white">
      <h3 className="text-base sm:text-lg min-[1000px]:text-[24px] font-bold">
        Speakers
      </h3>
      <p className="text-xs min-[1000px]:text-[14px]">
        Amazon wireless speakers
      </p>
      <button className="underline mt-1">Shop Now</button>
    </div>
  </div>


  {/* Perfume */}
  <div className="bg-black flex justify-center items-center relative min-h-[200px]">
    <img src={gucciPerfumes} alt="image" className="object-contain max-h-[140px]" />
    <div className="absolute bottom-5 left-5 text-white">
      <h3 className="text-base sm:text-lg min-[1000px]:text-[24px] font-bold">
        Perfume
      </h3>
      <p className="text-xs min-[1000px]:text-[14px]">
        GUCCI INTENSE OUD EDP
      </p>
      <button className="underline mt-1">Shop Now</button>
    </div>
  </div>

</div>
     
     {/* services */}
    <div className="
  flex flex-col 
  sm:flex-row 
  sm:flex-wrap 
  lg:flex-nowrap
  justify-center 
  lg:justify-around 
  items-center 
  gap-10 
  px-4 sm:px-6 md:px-10 lg:px-[50px]
  mb-12 lg:mb-[50px]
  text-center
">

  {/* Service 1 */}
  <div className="flex flex-col items-center max-w-xs">
    <img className="pb-3 w-12 sm:w-14 md:w-16" src={Delevery} alt="fast delivery" />
    <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
      FREE AND FAST DELIVERY
    </h3>
    <p className="text-sm sm:text-base md:text-lg mt-2">
      Free delivery for all orders over $140
    </p>
  </div>

  {/* Service 2 */}
  <div className="flex flex-col items-center max-w-xs">
    <img className="pb-3 w-12 sm:w-14 md:w-16" src={CustomerCare} alt="customer care support" />
    <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
      24/7 CUSTOMER SERVICE
    </h3>
    <p className="text-sm sm:text-base md:text-lg mt-2">
      Friendly 24/7 customer support
    </p>
  </div>

  {/* Service 3 */}
  <div className="flex flex-col items-center max-w-xs">
    <img className="pb-3 w-12 sm:w-14 md:w-16" src={Trust} alt="Trust 100%" />
    <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
      MONEY BACK GUARANTEE
    </h3>
    <p className="text-sm sm:text-base md:text-lg mt-2">
      We return money within 30 days
    </p>
  </div>

</div>

    
    </>
  )
}

export default Home
