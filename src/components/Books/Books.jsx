import React, { useState } from 'react';

const Books = ({book,getBookDetails,handleFavItems}) => {

    const { bookImage, bookAuthor, bookTitle, bookPrice, bookStatus } = book;

    let originalPrice;
    let discountedPrice;
    const [bookStatusCheck, setBookStatusCheck] = useState(false);

    if(bookStatus !== "Low Stock"){
        bookStatus(true);
    }

    if (bookPrice.includes(' ')) {
        const bookPriceCalc = bookPrice.split(' ');
        originalPrice = bookPriceCalc.slice(0, 2).join('');
        discountedPrice = bookPriceCalc.slice(2).join('');
    }
    return (
        <div className='flex items-center gap-12 w-full h-full lg:p-5 p-10 lg:flex-row flex-col my-5'>
            <img src={bookImage} alt="book-image.png" className='rounded-xl w-[200px] lg:w-[500px] h-full' />
            <div className='w-full h-full *:mb-5'>
                <h1 className='lg:text-lg text-base font-bold'>{bookTitle}</h1>
                <p className='text-[#0d084285] lg:text-sm text-xs'>পাঠকসমাজে তাঁর পরিচিতি এখন গৎবাঁধা লেখার বাইরে নতুনত্বের আমেজ এনে দেওয়া তরুণ লেখক হিসেবে।</p>
                <p className='lg:text-base text-sm'>{bookAuthor}</p>
                <p className='font-medium lg:text-lg text-base'>
                    {discountedPrice ? (
                        <>
                            <span className='text-red-500 line-through text-sm lg:text-base'>{originalPrice}</span> {discountedPrice}
                        </>
                    ) : (
                        originalPrice
                    )}
                </p>
                <p className={bookStatus ? 'text-green-500' : 'text-red-500 line-through'}>{bookStatus ? bookStatus : "Product In Stock"}</p>

                <div className='flex items-center justify-between'>
                <button className='bg-[#FFCE1A] px-4 py-2 rounded-lg text-white font-medium text-sm flex items-center gap-2' onClick={()=>{getBookDetails(bookTitle,discountedPrice ? discountedPrice : originalPrice,bookStatus)}}>
                    <svg width="18" height="20" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5H3.22222L3.66667 3.83333M5.44444 13.1667H16.5556L21 3.83333H3.66667M5.44444 13.1667L3.66667 3.83333M5.44444 13.1667L2.89679 15.8417C2.19682 16.5767 2.69257 17.8333 3.68246 17.8333H16.5556M16.5556 17.8333C15.3283 17.8333 14.3333 18.878 14.3333 20.1667C14.3333 21.4553 15.3283 22.5 16.5556 22.5C17.7829 22.5 18.7778 21.4553 18.7778 20.1667C18.7778 18.878 17.7829 17.8333 16.5556 17.8333ZM7.66667 20.1667C7.66667 21.4553 6.67174 22.5 5.44444 22.5C4.21715 22.5 3.22222 21.4553 3.22222 20.1667C3.22222 18.878 4.21715 17.8333 5.44444 17.8333C6.67174 17.8333 7.66667 18.878 7.66667 20.1667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Add To Cart</span>
                </button>
                <button className='p-2 rounded-full bg-[#ffce1a]' onClick={()=>handleFavItems(bookTitle,bookImage,bookStatus)}>
                <svg width="20" height="15" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.83058 2.71572C0.389806 5.00335 0.389806 8.71234 2.83058 11L13.5001 21L24.1694 11C26.6102 8.71233 26.6102 5.00335 24.1694 2.71572C21.7286 0.428092 17.7714 0.428092 15.3306 2.71572L13.5001 4.43151L11.6694 2.71572C9.22864 0.428093 5.27136 0.428093 2.83058 2.71572Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>
                </div>
            </div>
        </div>
    );
}

export default Books;