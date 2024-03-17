import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredRequestStock, setToCart } from './Utilities/localStorage';
import BookSection from './components/BookSection/BookSection';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NewsSection from './components/NewsSection/NewsSection';


function App() {
  const [cartCount, setCartCount] = useState(0);
  const [bookName, setbookName] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [favItemsCount, setFavItemsCount] = useState(0)
  const [total,setTotal] = useState(0);
  const [requestedBookCount, setRequestedBookCount] = useState(0);
  const [requestedStock, setRequestedStock] = useState([]);



const getBookDetails = (bookName, bookPrice,bookStatus,book) => {
  const priceInNum = Number(bookPrice.replace("TK.",''));
const isExist = cartItems.find(book => book.bookName === bookName);
if(!isExist && bookStatus !== ''){
  const newCartItems = {bookName,bookPrice};
  setCartItems((prev)=>[...prev, newCartItems])
setbookName(bookName);
setBookPrice(bookPrice);
setTotal(total+priceInNum);
setCartCount(cartCount + 1);
  toast.success('Added to cart')
  setToCart(book)
}
  else if(isExist){
    toast.error('Already Exist in Cart')
  }
  else if(bookStatus === ''){
    toast.error('Low Stock')
  }

}

const handleFavItems = (bookTitle, bookImage,bookPrice,bookStatus) => {
  const newFavItems = {bookTitle, bookImage,bookPrice,bookStatus}
  setFavItems([...favItems, newFavItems])
  setFavItemsCount(favItemsCount + 1)
  toast.success('Added to Favorites')
}

const handleFavItemToCart = (bookName, bookImage, bookPrice, bookStatus,favBook) => {
  getBookDetails(bookName, bookPrice, bookStatus,favBook);
  const updatedFavItems = favItems.filter(item => item.bookName !== bookName);
  setFavItems(updatedFavItems);
  setFavItemsCount(prevCount => prevCount - 1);
  // setToCart(favBook)
}

const handleRequestStock = (bookName) => {
  const updatedFavItems = favItems.filter(item => item.bookTitle !== bookName);
  setFavItems(updatedFavItems);
  setFavItemsCount(prevCount => prevCount - 1);
  toast.success('Request Saved!');
  setToRequestStock(bookName)
}

const setToRequestStock = (id) => {
  const request = getStoredRequestStock();

  if (request.length === 0) {
      const requestStr = JSON.stringify([id]);
      localStorage.setItem('request-stock', requestStr);
      setRequestedBookCount(requestedBookCount+1);
  } else {
      const isExist = request.includes(id);
      if (!isExist) {
          request.push(id);
          const requestStr = JSON.stringify(request);
          localStorage.setItem('request-stock', requestStr);
          setRequestedBookCount(requestedBookCount+1);
      }
  }
}

const handleRequestStockFromLocalStorage = () => {
  const requestedStockInLocalStorage = getStoredRequestStock();
setRequestedStock(requestedStockInLocalStorage)
  
}

  return (
    <div className='w-full h-auto'>
      <Navbar cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} total={total}setTotal={setTotal} favItems={favItems} favItemsCount={favItemsCount} handleFavItemToCart={handleFavItemToCart} setCartItems={setCartItems} handleRequestStock={handleRequestStock} requestedBookCount={requestedBookCount} handleRequestStockFromLocalStorage={handleRequestStockFromLocalStorage} requestedStock={requestedStock}></Navbar>
      <Header></Header>
      <BookSection getBookDetails={getBookDetails} handleFavItems={handleFavItems}></BookSection>
      <NewsSection></NewsSection>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
