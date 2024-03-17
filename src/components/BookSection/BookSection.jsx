import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Books from '../Books/Books';

const BookSection = ({handleCartCount,getBookDetails,handleFavItems}) => {
    const [books, setBooks] = useState([])
    const [bestSellerBooks2023,setBestSellerBooks2023] = useState([]);
    const [selectAuthor, setSelectAuthor] = useState('');
    const [searchBook, setSearchBook] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [searchError, setSearchError] = useState(false);
    const [selectCategory, setSelectCategory] = useState('');
    const [changeBookHeading,setChangeBookHeading] = useState('Recomended Books');
   
    useEffect(()=>{
        if(selectCategory){
        fetch(`https://raw.githubusercontent.com/ShejanMahamud/React-Book-Store/main/src/BookData/${selectCategory.toLowerCase()}.json`)
        .then(res=>res.json())
        .then(data => setBooks(data))
    }
    },[selectCategory]);

    useEffect(()=>{
        if(selectAuthor){
        fetch(`https://raw.githubusercontent.com/ShejanMahamud/React-Book-Store/main/src/BookData/${selectAuthor.toLowerCase()}.json`)
        .then(res=>res.json())
        .then(data => setBooks(data))
    }
    },[selectAuthor]);
   
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/ShejanMahamud/React-Book-Store/main/src/BookData/recomended-books.json`)
        .then(res=>res.json())
        .then(data => setBooks(data))
    },[]);

    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/ShejanMahamud/React-Book-Store/main/src/BookData/best-seller-2023.json`)
        .then(res=>res.json())
        .then(data => setBestSellerBooks2023(data))
    },[]);

    useEffect(() => {
        if (searchBook) {
            fetch(`https://raw.githubusercontent.com/ShejanMahamud/React-Book-Store/main/src/BookData/${searchBook.toLowerCase()}.json`)
                .then(res => {
                    if (!res.ok) {
                        setSearchError(true);
                    }else{
                        setSearchError(false);
                    }
                    
                    return res.json();
                })
                .then(data => setBooks(data))
        }
    }, [searchBook]);
    


const handleAuthorSelect = (e) => {
    const authorName = e.target.value;
    setSelectAuthor(e.target.value)
    setChangeBookHeading(authorName.toUpperCase().replace('-',' '))
}
const handleCategorySelect = (e) => {
    const categoryName = e.target.value;
    setSelectCategory(e.target.value);
    setChangeBookHeading(categoryName.toUpperCase().replace('-',' '))
}
const handleSearchBtn = () => {
    const inputValueStr = inputValue.replace(" ",'-')
    setSearchBook(inputValueStr);
}

  return (
    <main className='w-[90%] mx-auto my-20 font-poppins'>
       <div className='w-full flex justify-between lg:items-end lg:flex-row items-start gap-10 flex-col'>
       <div>
       <h1 className='text-base lg:text-xl font-semibold mb-5'>
            Top Sellers
        </h1>
       <div className='bg-gray-200 px-5 py-3 rounded-lg inline-flex justify-between'>
       <select className='bg-transparent focus:outline-none' onChange={handleAuthorSelect}>
        <option value="recomended-books">Choose a author</option>
        <option value="jhankar-mahabub">Jhankar Mahabub</option>
        <option value="arif-azad">Arif Azad</option>
        <option value="humayen-ahmed">Humayen Ahmed</option>
        <option value="sadat-hossain">Sadat Hossian</option>
        <option value="shaykh-ahmadullah">Shayek Ahmadullah</option>
        <option value="muhammod-zafar-iqbal">Muhammod Zafar Iqbalh</option>
       </select>
       </div>
       </div>

       <div>
       <h1 className='text-base lg:text-xl font-semibold mb-5'>
            Select Category
        </h1>
       <div className='bg-gray-200 px-5 py-3 rounded-lg inline-flex justify-between'>
       <select className='bg-transparent focus:outline-none *:text-base *:lg:text-xl' onChange={handleCategorySelect}>
        <option value="choose-category">Choose a category</option>
        <option value="programming">Programming</option>
        <option value="islamic">Islamic</option>
       </select>
       </div>
       </div>
       
<div>
<div className='bg-gray-100 text-gray-500 px-5 py-3 rounded-lg flex items-center justify-between'>
    <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" className='bg-transparent focus:outline-none' placeholder='Search Books..'/>
    <button onClick={handleSearchBtn}><i class="las la-search text-xl"></i></button>
        </div>

        <div role="alert" className={`alert alert-error my-5 ${searchError ? 'visible' : 'hidden'}`}>
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Sorry! Author not found.</span>
</div>
</div>

       </div>

       <div className='w-full my-20'>
        <h1 className='text-xl font-semibold mb-5'>{changeBookHeading}</h1>
 <Swiper 
  modules={[Navigation]}
 spaceBetween={50}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      > 
{books.map((book,index) => (<SwiperSlide key={index}><Books key={index} book={book} handleCartCount={handleCartCount} getBookDetails={getBookDetails} handleFavItems={handleFavItems}></Books></SwiperSlide>))} </Swiper>  
</div>


<div className='w-full my-20'>
        <h1 className='text-xl font-semibold mb-5 uppercase'>Best Seller Books 2023</h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-16 items-center row-auto'>
{bestSellerBooks2023.map((book,index) => (<Books key={index} book={book} handleCartCount={handleCartCount} getBookDetails={getBookDetails} handleFavItems={handleFavItems}></Books>))}</div> 
</div>
       
    </main>
  )
}

export default BookSection