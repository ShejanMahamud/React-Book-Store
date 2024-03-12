import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between w-[90%] mx-auto my-5'>
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

        <div className='bg-gray-100 text-gray-500 px-5 py-2 rounded-lg flex items-center justify-between'>
    <input type="text" className='bg-transparent focus:outline-none' placeholder='Search Books..'/>
    <button><i class="las la-search text-xl"></i></button>
        </div>

        <div className='flex items-center gap-6'>
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1429 5.88889C15.1429 8.58895 12.8403 10.7778 10 10.7778C7.15968 10.7778 4.85714 8.58895 4.85714 5.88889C4.85714 3.18883 7.15968 1 10 1C12.8403 1 15.1429 3.18883 15.1429 5.88889Z" fill="white"/>
<path d="M10 14.4444C5.02944 14.4444 1 18.2749 1 23H19C19 18.2749 14.9706 14.4444 10 14.4444Z" fill="white"/>
<path d="M15.1429 5.88889C15.1429 8.58895 12.8403 10.7778 10 10.7778C7.15968 10.7778 4.85714 8.58895 4.85714 5.88889C4.85714 3.18883 7.15968 1 10 1C12.8403 1 15.1429 3.18883 15.1429 5.88889Z" stroke="#0D0842" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14.4444C5.02944 14.4444 1 18.2749 1 23H19C19 18.2749 14.9706 14.4444 10 14.4444Z" stroke="#0D0842" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.83058 2.71572C0.389806 5.00335 0.389806 8.71234 2.83058 11L13.5001 21L24.1694 11C26.6102 8.71233 26.6102 5.00335 24.1694 2.71572C21.7286 0.428092 17.7714 0.428092 15.3306 2.71572L13.5001 4.43151L11.6694 2.71572C9.22864 0.428093 5.27136 0.428093 2.83058 2.71572Z" stroke="#0D0842" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5H3.22222L3.66667 3.83333M5.44444 13.1667H16.5556L21 3.83333H3.66667M5.44444 13.1667L3.66667 3.83333M5.44444 13.1667L2.89679 15.8417C2.19682 16.5767 2.69257 17.8333 3.68246 17.8333H16.5556M16.5556 17.8333C15.3283 17.8333 14.3333 18.878 14.3333 20.1667C14.3333 21.4553 15.3283 22.5 16.5556 22.5C17.7829 22.5 18.7778 21.4553 18.7778 20.1667C18.7778 18.878 17.7829 17.8333 16.5556 17.8333ZM7.66667 20.1667C7.66667 21.4553 6.67174 22.5 5.44444 22.5C4.21715 22.5 3.22222 21.4553 3.22222 20.1667C3.22222 18.878 4.21715 17.8333 5.44444 17.8333C6.67174 17.8333 7.66667 18.878 7.66667 20.1667Z" stroke="#0D0842" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
    </nav>
  )
}

export default Navbar