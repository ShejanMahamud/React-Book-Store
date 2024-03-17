import React from 'react';

const Navbar = ({cartCount,cartItems,setCartCount,total,setTotal,favItems,favItemsCount,handleFavItemToCart,setCartItems,handleRequestStock,requestedBookCount,handleRequestStockFromLocalStorage,requestedStock}) => {

const handleDeleteFromCart = (index) => {
  const updatedCartItems = cartItems.filter((_, i) => i !== index);
  setCartItems(updatedCartItems);
  setCartCount(cartCount-1);
}


  return (
    <div className='w-full'>
      <nav className='flex items-center justify-between w-[90%] my-5 lg:flex-row flex-col mx-auto'>
        <div className='flex items-center gap-1'>
<svg width="60" height="60" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet">

<path d="M54.9 39.7l7.3 7.6l-32.1 16.1s-4.2 2.1-6.2-1.2c-8-13 31-22.5 31-22.5" fill="#256382">

</path>

<path d="M29.2 53.9s-6.1 2.3-5 6.6c1.2 4.5 6.1 1.8 6.1 1.8l30.5-15s-1.7-4.8 1.4-8l-33 14.6" fill="#d9e3e8">

</path>

<path fill="#42ade2" d="M34.4 8.9L63.6 39L29.1 53.3L7 16.7z">

</path>

<g fill="#94989b">

<path d="M60.7 42.6l-20.4 8.8l20-9.7z">

</path>

<path d="M60.4 45.2l-21.7 9.5L60 44.3z">

</path>

<path d="M60.6 46.7L32.9 59.4l27.3-13.6z">

</path>

</g>

<path d="M23.8 62.1c-3.4-7.5 5.3-8.8 5.3-8.8L7 16.7s-5-.1-5 5.4c0 2.3 1 4 1 4l20.8 36" fill="#428bc1">

</path>

<path d="M8.7 32.2l-7.3 7.6l32.1 16.1s4.2 2.1 6.2-1.2c8-13-31-22.5-31-22.5" fill="#547725">

</path>

<path d="M34.3 46.4s6.1 2.3 5 6.6c-1.2 4.5-6 1.8-6 1.8l-30.5-15s1.7-4.8-1.4-8l32.9 14.6" fill="#d9e3e8">

</path>

<path fill="#83bf4f" d="M29.2 1.4L0 31.5l34.5 14.3L56.6 9.2z">

</path>

<g fill="#94989b">

<path d="M3.2 34.2l20 9.7l-20.4-8.8z">

</path>

<path d="M3.6 36.8l21.2 10.4l-21.7-9.5z">

</path>

<path d="M3.4 38.3l27.2 13.6L2.9 39.2z">

</path>

</g>

<path d="M39.8 54.6c3.4-7.5-5.3-8.8-5.3-8.8L56.6 9.2s5-.1 5 5.4c0 2.3-1 4-1 4l-20.8 36" fill="#699635">

</path>

<path d="M56.7 26l6.1 6.4l-27.1 13.5s-3.6 1.7-5.3-1C23.8 34 56.7 26 56.7 26z" fill="#962c2c">

</path>

<path d="M35 38s-5.2 1.9-4.2 5.6c1 3.8 5.1 1.5 5.1 1.5l25.7-12.7s-1.4-4 1.2-6.7L35 38z" fill="#d9e3e8">

</path>

<path fill="#ed4c5c" d="M39.4 0L64 25.4L34.9 37.5L16.2 6.6z">

</path>

<path fill="#ffffff" d="M40.1 5.8l4.8 5.3l-17.7 6.7L23 11z">

</path>

<g fill="#94989b">

<path d="M61.6 28.5l-17.2 7.3l16.8-8.2z">

</path>

<path d="M61.4 30.7L43 38.6l18-8.8z">

</path>

<path d="M61.6 31.9L38.2 42.6L61.1 31z">

</path>

</g>

<path d="M30.5 44.9c-2.8-6.3 4.5-7.4 4.5-7.4L16.2 6.6s-4.3-.1-4.3 4.5c0 1.9.8 3.4.8 3.4l17.8 30.4" fill="#c94747">

</path>

</svg>
    <span className='font-semibold text-3xl font-poppins text-blue-400'>Johu<span className='text-[#FFCE1A]'>Books</span> </span>
        </div>

        <div className='flex items-center gap-6'>
        
<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.83058 2.71572C0.389806 5.00335 0.389806 8.71234 2.83058 11L13.5001 21L24.1694 11C26.6102 8.71233 26.6102 5.00335 24.1694 2.71572C21.7286 0.428092 17.7714 0.428092 15.3306 2.71572L13.5001 4.43151L11.6694 2.71572C9.22864 0.428093 5.27136 0.428093 2.83058 2.71572Z" stroke="#0D0842" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <span className="badge badge-base text-white indicator-item bg-[#ffce1a]">{favItemsCount}</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-56 lg:w-96 bg-base-100 shadow">
        <div className="card-body">
         {
          favItems.map((favBook,index) => (
            <div className='flex items-center justify-between' key={index}>
              <span className='font-bold'>{favBook.bookTitle}</span>
              <img src={favBook.bookImage} alt="favorite book.png" className='w-[50px] border-2 border-[#ffce1a]'/>
              <button className={`${favBook.bookStatus ? 'inline-block' : 'hidden'}`} onClick={()=>handleFavItemToCart(favBook.bookTitle,favBook.bookImage,favBook.bookPrice,favBook.bookStatus,favBook)}><i class="fa-solid fa-cart-shopping text-2xl"></i></button>
              <button onClick={()=>handleRequestStock(favBook.bookTitle)} className={`bg-[#FFCE1A] text-white p-2 rounded-md text-xs ${favBook.bookStatus ? 'hidden' : 'inline-block'}`}>Request Stock</button>
            </div>
          ))
         }
        </div>
      </div>
</div>

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#0D0842"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-base text-white indicator-item bg-[#ffce1a]">{cartCount}</span>
        </div>
      </div>
      <div tabIndex={0} className="my-3 z-[1] card card-compact dropdown-content w-56 lg:w-96 bg-base-100 shadow ">
        <div className="card-body">
          <span className="font-bold text-lg">{cartCount} Items</span>


{       cartItems.map((book, index) => (
          <div key={index} className={`flex items-center justify-between`}>
            <span className='w-[50%]'>{book.bookName}</span>
            <span>{book.bookPrice}</span>
            <button onClick={() => {
              const priceInNum = Number(book.bookPrice.replace("TK.",''));
              handleDeleteFromCart(index);setTotal(total-priceInNum)}}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>

))         }

          <span className="text-info">Subtotal: {total}</span>
          <div className="card-actions">
            <button className="btn bg-[#FFCE1A] btn-block text-white hover:bg-[#ffce1a]">View cart</button>
          </div>
        </div>
      </div>
    </div>

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <button className="justify-between" onClick={()=>handleRequestStockFromLocalStorage()}>
            Requested Books <span className="badge badge-base text-white indicator-item bg-[#ffce1a]">{requestedBookCount}</span>
          </button>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>

        </div>


    </nav>

{/* <div className='w-full bg-[#ffce1a] h-[200px]'>
    <div>
      <h1>Requested Book</h1>

{
  requestedStock.map(book => (
    <li>{book}</li>
  ))
}
    </div>
</div> */}
    </div>
  )
}

export default Navbar;

