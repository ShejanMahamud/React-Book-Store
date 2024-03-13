import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const BookSection = ({handleCartCount,getBookDetails}) => {
    const [books, setBooks] = useState([])
    const [selectAuthor, setSelectAuthor] = useState('');
    
   
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

const handleAuthorSelect = (e) => {
    setSelectAuthor(e.target.value)
}

  return (
    <main className='w-[90%] mx-auto my-20 font-poppins'>
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
       </select>
       </div>
       </div>

<div className='grid grid-cols-1 lg:grid-cols-2 row-auto items-center gap-x-10 gap-y-20 my-20'>
{books.map(book => (<Books key={book.bookTitle} book={book} handleCartCount={handleCartCount} getBookDetails={getBookDetails}></Books>))}
</div>
       
    </main>
  )
}

export default BookSection