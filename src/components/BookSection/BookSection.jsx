import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const BookSection = ({handleCartCount,getBookDetails}) => {
    const [books, setBooks] = useState([])
    const [selectAuthor, setSelectAuthor] = useState('');
    const [searchBook, setSearchBook] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [searchError, setSearchError] = useState(false);
    const [selectCategory, setselectCategory] = useState('');
   
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
        fetch(`https://raw.githubusercontent.com/ShejanMahamud/React-Book-Store/main/src/BookData/choose-author.json`)
        .then(res=>res.json())
        .then(data => setBooks(data))
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
    setSelectAuthor(e.target.value)
}
const handleCategorySelect = (e) => {
    setSelectAuthor(e.target.value)
}
const handleSearchBtn = () => {
    const inputValueStr = inputValue.replace(" ",'-')
    setSearchBook(inputValueStr);
}

  return (
    <main className='w-[90%] mx-auto my-20 font-poppins'>
       <div className='w-full flex justify-between items-center'>
       <div>
       <h1 className='text-xl font-semibold mb-5'>
            Top Sellers
        </h1>
       <div className='bg-gray-200 px-5 py-3 rounded-lg inline-flex justify-between'>
       <select className='bg-transparent focus:outline-none' onChange={handleAuthorSelect}>
        <option value="choose-author">Choose a author</option>
        <option value="jhankar-mahabub">Jhankar Mahabub</option>
        <option value="arif-azad">Arif Azad</option>
        <option value="humayen-ahmed">Humayen Ahmed</option>
        <option value="sadat-hossain">Sadat Hossian</option>
        <option value="Shaykh-Ahmadullah">Shayek Ahmadullah</option>
        <option value="Muhammod-Zafar-Iqbalh">Muhammod Zafar Iqbalh</option>
       </select>
       </div>
       </div>

       <div>
       <h1 className='text-xl font-semibold mb-5'>
            Select Category
        </h1>
       <div className='bg-gray-200 px-5 py-3 rounded-lg inline-flex justify-between'>
       <select className='bg-transparent focus:outline-none' onChange={handleCategorySelect}>
        <option value="choose-category">Choose a category</option>
        <option value="programming">Programming</option>
       </select>
       </div>
       </div>
       
<div>
<div className='bg-gray-100 text-gray-500 px-5 py-2 rounded-lg flex items-center justify-between'>
    <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" className='bg-transparent focus:outline-none' placeholder='Search Books..'/>
    <button onClick={handleSearchBtn}><i class="las la-search text-xl"></i></button>
        </div>

        <div role="alert" className={`alert alert-error my-5 ${searchError ? 'visible' : 'hidden'}`}>
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Sorry! Author not found.</span>
</div>
</div>

       </div>

<div className='grid grid-cols-1 lg:grid-cols-2 row-auto items-center gap-x-10 gap-y-20 my-20'>
{books.map((book,index) => (<Books key={index} book={book} handleCartCount={handleCartCount} getBookDetails={getBookDetails}></Books>))}
</div>
       
    </main>
  )
}

export default BookSection