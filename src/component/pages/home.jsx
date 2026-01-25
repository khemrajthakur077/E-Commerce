import React from 'react'
import useHorizontalScroll from './horizontalScroll';
import Skeleton from './skeleton';
import Heroimg from'../../assets/hero-img.png';
import Cart from './cart';
import Cart2 from './cart2';
import gameremote from '../../assets/game-remote.png';
import star from '../../assets/star.svg';
import keyboard from '../../assets/keyboard.png';
import blanckstar from '../../assets/blanck-star.svg';
import halfstar from '../../assets/half-star.svg';
import ledtv from '../../assets/led-tv.png';
import chair from '../../assets/chair.png';
import phones from '../../assets/phones.png';
import computers from '../../assets/computers.png';
import smartwatch from '../../assets/smartwatch.png';
import camera from '../../assets/camera.png';
import headphones from '../../assets/headphones.png';
import gaming from '../../assets/gaming.png';
import redjacket from '../../assets/red-jacket.png';
import ladiespurce from '../../assets/ladies-purse.png';
import buffer from '../../assets/buffer.png';
import bookstable from '../../assets/books-table.png';
import blackbuffer from '../../assets/buffer-sale.png';
// explore our products
import BreedDryDogFood from '../../assets/Breed-Dry-Dog-Food.png';
import CANONEOSDSLRCamerar from '../../assets/CANON-EOS-DSLR-Camera.png';
import ASUSFHDGamingLaptop from '../../assets/ASUS-FHD-Gaming-Laptop.png';
import CurologyProductSet from '../../assets/Curology-Product-Set.png';
// grid section images
import playStation from '../../assets/play-station-5.png';
import womenCollection from '../../assets/women-collection.png';
import speakers from '../../assets/speakers.png';
import gucciPerfumes from '../../assets/gucci-perfumes.png';
// services
import Delevery from '../../assets/delevery.png';
import CustomerCare from '../../assets/customer-care.png';
import Trust from '../../assets/trust.png';
// arrow
import LeftArrow from '../../assets/left-arrow.png';
import RightArrow from '../../assets/right-arrow.png';





const Home = () => {

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
    <Skeleton>
      <div className='flex w-[100%]'>
         <div className='flex flex-col pt-10 pl-[50px]  gap-4 w-[19%]'>
          <p>Woman’s Fashion       </p>
          <p>Men’s Fashion</p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
         </div>
       <div className="w-px h-96 bg-black ml-10"></div>
         <div className='w-[80%] pt-10 pl-10 pb-[50px]'>
          <img src={Heroimg} alt="hero-image" />
         </div>
      </div>
       {/* cart section */}
       <div className='px-[50px]'>
      <div className='flex items-center gap-2'> <div className='h-9 w-4 bg-[#DB4444] rounded'></div> <p className='text-[#DB4444]'>Today’s</p> </div>
      <div className='flex justify-between'> 
        <h1 className='font-bold text-[48px] '>Flash Sales</h1>
        <div className='flex gap-5'>
        <button onClick={flashLeft}
        ><img src={LeftArrow} alt="" /></button>
        <button onClick={flashRight}
        ><img src={RightArrow} alt="" /></button>
        </div> 
      </div>
      </div>
     


    <div ref={flashSaleRef} className='flex my-9 px-[50px] gap-7  overflow-x-auto scroll-smooth hide-scrollbar'>
      {/* cart-1 */}
    <Cart img={gameremote}
    discount='-40%'
    productname='HAVIT HV-G92 Gamepad'
    rating='(88)'
    price='$120'
    oldprice='$160'
    star1={star}
    star2={star}
    star3={star}
    star4={star}
    star5={star}
    />
     {/* cart-2 */}
    <Cart img={keyboard}
    discount='-35%'
    productname='AK-900 Wired Keyboard'
    price='$960'
    oldprice='$1160'
    star1={star}
    star2={star}
    star3={star}
    star4={star}
    star5={blanckstar}
    rating='(99)'
    />
   {/* cart-3 */}
     <Cart img={ledtv}
    discount='-30%'
    productname='IPS LCD Gaming Monitor'
    price='$370'
    oldprice='$400'
    star1={star}
    star2={star}
    star3={star}
    star4={star}
    star5={star}
    rating='(88)'
    />
    {/* cart-4 */}
     <Cart img={chair}
    discount='-25%'
    productname='S-Series Comfort Chair '
    rating='(88)'
    price='$375'
    oldprice='$400'
    star1={star}                        
    star2={star}
    star3={star}
    star4={star}
    star5={halfstar}
    />

  <Cart img={chair}
    discount='-25%'
    productname='S-Series Comfort Chair '
    rating='(88)'
    price='$375'
    oldprice='$400'
    star1={star}
    star2={star}
    star3={star}
    star4={star}
    star5={halfstar}
    />

    </div>
    {/* Categories section */}
    <div className='px-[50px] my-9'>
    <div className='flex items-center gap-2'> <div className='h-9 w-4 bg-[#DB4444] rounded'></div> <p className='text-[#DB4444]'>Categories</p> </div>
    <div className='flex justify-between'> <h1 className='font-bold text-[48px]'>Browse By Category</h1>
    <div className='flex gap-5'>
        <button onClick={categoryLeft}
        ><img src={LeftArrow} alt="" /></button>
        <button onClick={categoryRight}
        ><img src={RightArrow} alt="" /></button> 
        </div> 
    </div>
    </div>
    <div ref={Category} className='flex px-[50px] gap-7 my-9 overflow-x-auto scroll-smooth hide-scrollbar'>
      <img className='cursor-pointer hover:bg-red-300' src={phones} alt="image" />
      <img className='cursor-pointer hover:bg-red-300' src={computers} alt="image" />
      <img className='cursor-pointer hover:bg-red-300' src={smartwatch} alt="image" />
      <img className='cursor-pointer hover:bg-red-300' src={camera} alt="image" />
      <img className='cursor-pointer hover:bg-red-300' src={headphones} alt="image" />
      <img className='cursor-pointer hover:bg-red-300' src={gaming} alt="image" />
    </div>
    {/* best selling product */}
     <div className='px-[50px] my-9'>
    <div className='flex items-center gap-2'> <div className='h-9 w-4 bg-[#DB4444] rounded'></div> <p className='text-[#DB4444]'>This Month</p> </div>
    <div> <h1 className='font-bold text-[48px]'>Best Selling Products</h1></div>
    </div>

     <div className='flex gap-7 overflow-x-auto scroll-smooth hide-scrollbar my-9 px-[50px]'>
      {/* cart-1 */}
    <Cart img={redjacket}
    productname='The north coat'
    rating='(88)'
    price='$260'
    oldprice='$360'
    star1={star}
    star2={star}
    star3={star}
    star4={star}
    star5={star}
    />
     {/* cart-2 */}
    <Cart img={ladiespurce}
    productname='Gucci duffle bag'
    price='$960'
    oldprice='$1160'
    star1={star}
    star2={star}
    star3={star}
    star4={star}
    star5={blanckstar}
    rating='(70)'
    />
   {/* cart-3 */}
     <Cart img={buffer}
    productname='RGB liquid CPU Cooler'
    price='$160'
    oldprice='$170'
    star1={star}
    star2={star}
    star3={star}
    star4={star}
    star5={star}
    rating='(90)'
    />
    {/* cart-4 */}
     <Cart img={bookstable}
    productname='Small BookSelf'
    price='$360'
    oldprice='$400'
    star1={star}
    star2={star}
    star3={star}
    star4={star}
    star5={halfstar}
    rating='(75)'
    />
    </div>
    {/* special speaker offer */}
    <div className='flex bg-gradient-to-r from-[#1a1a1a] via-[#0f0f0f] to-[#3A3A3A] h-[400px] mx-[50px] px-[30px] my-[50px]'>
      <div className='flex flex-col justify-around '>
        <p className='text-base text-[#00FF66]'>Categories</p>
        <h3 className='text-[48px] text-white'>Enhance Your Music Experience</h3>
        <button className=' bg-[#00FF66] text-[#ffffff] cursor-pointer w-fit px-[20px] py-[10px]'>Buy Now!</button>
      </div>

      <div className='flex justify-center items-center'>
        <img src={blackbuffer} alt="buffer image" />
      </div>
    </div>
    {/* explore our products */}
     <div className='px-[50px] my-9'>
    <div className='flex items-center gap-2'> <div className='h-9 w-4 bg-[#DB4444] rounded'></div> <p className='text-[#DB4444]'>Our Products</p> </div>
    <div> <h1 className='font-bold text-[48px]'>Explore Our Products</h1></div>
    </div>
    <div className='mx-[50px] mb-[50px] flex items-center gap-7 overflow-x-auto scroll-smooth hide-scrollbar'>
    {/* product 1 */}
    <Cart2 img={BreedDryDogFood}
    productname='Breed Dry Dog Food'
    price='$100'
    star1={star}
    star2={star}
    star3={blanckstar}
    star4={blanckstar}
    star5={blanckstar}
    rating='(35)'
    />
     {/* product 2 */}
     <Cart2 img={CANONEOSDSLRCamerar}
    productname='CANON EOS DSLR Camera'
    price='$360'
    star1={star}
    star2={star}
    star3={star}
    star4={star}
    star5={blanckstar}
    rating='(95)'
    />
     {/* product 3 */}
     <Cart2 img={ASUSFHDGamingLaptop}
    productname='ASUS FHD Gaming Laptop'
    price='$700'
    star1={star}
    star2={star}
    star3={star}
    star4={star}
    star5={star}
    rating='(325)'
    />
     {/* product 4 */}
     <Cart2 img={CurologyProductSet}
    productname='Curology Product Set '
    price='$500'
    star1={star}
    star2={star}
    star3={star}
    star4={star}
    star5={blanckstar}
    rating='(145)'
    />
    </div>
    <div className='flex justify-center items-center mb-[50px]'><button className='px-[20px] py-[10px] bg-[#DB4444] text-white cursor-pointer'>View All Peoducts</button></div>
     {/* new arrival section */}
    <div className='px-[50px] my-9'>
    <div className='flex items-center gap-2'> <div className='h-9 w-4 bg-[#DB4444] rounded'></div> <p className='text-[#DB4444]'>Featured</p> </div>
    <div> <h1 className='font-bold text-[48px]'>New Arrival</h1></div>
    </div>
     
     <div className='custom-grid m-[50px]'>
      <div className='custom-box1 bg-black flex justify-center relative'> 
        <img src={playStation} alt="image" />
        <div className='absolute bottom-7 left-7 '>
        <h3 className='text-white text-[24px] font-bold'>PlayStation 5</h3>
        <p className='text-white text-[14px]'>Black and White version of the PS5 coming out on sale.</p>
        <button className='text-white underline cursor-pointer'>Shop Now</button>
        </div>
      </div>
      <div className='custom-box2 grid gap-[20px]'>
        <div className='box2-minbox flex justify-end relative'>
          <img src={womenCollection} alt="image" />
          <div className='absolute bottom-7 left-7'>
          <h3 className='text-white text-[24px] font-bold'>Women’s Collections</h3>
          <p className='text-white text-[14px]'>Featured woman collections that give you another vibe.</p>
          <button className='text-white underline cursor-pointer'>Shop Now</button>
          </div>
        </div>
        <div className='custom-box3 gap-[20px]'>
        <div className='custom-minbox1 flex justify-center items-center bg-black relative'>
          <img src={speakers} alt="minbox image" /> 
          <div className='absolute bottom-7 left-7'>
          <h3 className='text-white text-[24px] font-bold'>Speakers</h3>
          <p className='text-white text-[14px]'>Amazon wireless speakers</p>
          <button className='text-white underline cursor-pointer'>Shop Now</button>
          </div>
        </div>
        <div className='custom-minbox2 flex justify-center items-center bg-black relative'>
          <img src={gucciPerfumes} alt="minbox image" /> 
          <div className='absolute bottom-7 left-7'>
          <h3 className='text-white text-[24px] font-bold'>Perfume</h3>
          <p className='text-white text-[14px]'>GUCCI INTENSE OUD EDP</p>
          <button  className='text-white underline cursor-pointer'>Shop Now</button>
          </div>
        </div>
      </div>
      </div>
     </div>
     
     {/* services */}
     <div className='flex justify-around mb-[50px] '>
      <div className='flex flex-col justify-center items-center'>
        <img className='pb-3' src={Delevery} alt="fast delevery" />
        <h3 className='font-bold text-[25px]'>FREE AND FAST DELIVERY</h3>
        <p className='text-[20px]'>Free delivery for all orders over $140</p>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <img className='pb-3' src={CustomerCare} alt="24*7 Customer care support" />
        <h3 className='font-bold text-[25px]'>24/7 CUSTOMER SERVICE</h3>
        <p className='text-[20px]'>Friendly 24/7 customer support</p>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <img className='pb-3' src={Trust} alt="Trust 100%" />
        <h3 className='font-bold text-[25px]'>MONEY BACK GUARANTEE</h3>
        <p className='text-[20px]'>We reurn money within 30 days</p>
      </div>
     </div>

    </Skeleton>
    </>
  )
}

export default Home
