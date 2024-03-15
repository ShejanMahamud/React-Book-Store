import { useState } from 'react';
import BookSection from './components/BookSection/BookSection';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';



function App() {
  const [cartCount, setCartCount] = useState(0);
  const [bookName, setbookName] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [favItemsCount, setFavItemsCount] = useState(0)
  const [total,setTotal] = useState(0);


const getBookDetails = (bookName, bookPrice,bookStatus) => {
  const priceInNum = Number(bookPrice.replace("TK.",''));

const isExist = cartItems.find(book => book.bookName === bookName);

if(!isExist && bookStatus !== 'Low Stock'){
  const newCartItems = {bookName,bookPrice};
  setCartItems((prev)=>[...prev, newCartItems])
setbookName(bookName);
setBookPrice(bookPrice);
setTotal(total+priceInNum);
setCartCount(cartCount + 1);
}

}

const handleFavItems = (bookName, bookImage) => {
  const newFavItems = {bookName, bookImage}
  setFavItems(prev => [...prev, newFavItems])
  setFavItemsCount(favItemsCount + 1)
  
}

  return (
    <div className='w-full h-auto'>
      <Navbar cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} total={total}setTotal={setTotal} favItems={favItems} favItemsCount={favItemsCount}></Navbar>
      <Header></Header>
      <BookSection getBookDetails={getBookDetails} handleFavItems={handleFavItems}></BookSection>
    </div>
  )
}

export default App
