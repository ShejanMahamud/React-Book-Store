import React from 'react'

const Books = ({book}) => {
  return (
    <div className='flex items-center gap-5 w-full h-full'>
        <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/00ea58560_112222.jpg" alt="book-image.png" className='rounded-xl w-full h-full'/>
        <div className='w-full h-full *:mb-1'>
            <h1 className='text-lg font-bold '>হাবলুদের জন্য প্রোগ্রামিং</h1>
            <p className='text-[#0d084285] text-sm'>পাঠকসমাজে তাঁর পরিচিতি এখন গৎবাঁধা লেখার বাইরে নতুনত্বের আমেজ এনে দেওয়া তরুণ লেখক হিসেবে।</p>
            <p>ঝংকার মাহবুব</p>
            <p className='font-medium text-lg'><span className='text-red-500 line-through text-base'>TK. 300</span> TK. 225</p>
    <p className='text-green-500'>Product In Stock</p>
    <button className='bg-[#FFCE1A] px-4 py-2 rounded-lg text-white font-medium text-sm flex items-center gap-2'>
    <svg width="18" height="20" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5H3.22222L3.66667 3.83333M5.44444 13.1667H16.5556L21 3.83333H3.66667M5.44444 13.1667L3.66667 3.83333M5.44444 13.1667L2.89679 15.8417C2.19682 16.5767 2.69257 17.8333 3.68246 17.8333H16.5556M16.5556 17.8333C15.3283 17.8333 14.3333 18.878 14.3333 20.1667C14.3333 21.4553 15.3283 22.5 16.5556 22.5C17.7829 22.5 18.7778 21.4553 18.7778 20.1667C18.7778 18.878 17.7829 17.8333 16.5556 17.8333ZM7.66667 20.1667C7.66667 21.4553 6.67174 22.5 5.44444 22.5C4.21715 22.5 3.22222 21.4553 3.22222 20.1667C3.22222 18.878 4.21715 17.8333 5.44444 17.8333C6.67174 17.8333 7.66667 18.878 7.66667 20.1667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
       <span>Add To Cart</span></button>
        </div>
    </div>

  )
}

export default Books