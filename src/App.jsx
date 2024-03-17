import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredCart, getStoredRequestStock } from './Utilities/localStorage';
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
  const [books, setBooks] = useState([]);

useEffect(()=>{
 const requestedBooks = getStoredRequestStock();
 setRequestedBookCount(requestedBooks.length)
},[])

// useEffect(() => {
//   fetch('books.json')
//     .then(res => res.json())
//     .then(data => {

//       setBooks(data);

//       const cartInLocalStorage = getStoredCart();

//       const foundBooks = [];

//       cartInLocalStorage.forEach(item => {

//         const foundBook = data.find(book => book.bookTitle === item);

//         if (foundBook) {
//           foundBooks.push(foundBook);
//         }
//       });

//       setBooks(foundBooks);
//       setCartCount(cartInLocalStorage.length)
//     })
// }, [cartItems]);


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
  setToCart(bookName)
}
  else if(isExist){
    toast.error('Already Exist in Cart')
  }
  else if(bookStatus === ''){
    toast.error('Low Stock')
  }
}

const handleDeleteFromCart = (index,bookTitle) => {
  const isExistInLocalStorage = getStoredCart();

  const isExist = isExistInLocalStorage.filter(item => item !== bookTitle);

if(isExist.length !== 0){
  const updatedCartStr = JSON.stringify(isExist);
  localStorage.setItem('cart',updatedCartStr);
}else{
  localStorage.removeItem('cart')
}
  const updatedCartItems = cartItems.filter((_, i) => i !== index);
  setCartItems(updatedCartItems);
  setCartCount(cartCount-1);
  toast.warning('Removed From Cart')
}

const handleFavItems = (bookTitle, bookImage,bookPrice,bookStatus) => {
  const isExist = favItems.find(book => book.bookTitle === bookTitle);
  const newFavItems = {bookTitle, bookImage,bookPrice,bookStatus}
  if(!isExist){
    setFavItems([...favItems, newFavItems])
  setFavItemsCount(favItemsCount + 1)
  toast.success('Added to Favorites')
  }else{
    toast.error('Already In Favorite Items')
  }
}

const handleFavItemToCart = (bookName, bookImage, bookPrice, bookStatus,favBook) => {
  getBookDetails(bookName, bookPrice, bookStatus,favBook);
  const updatedFavItems = favItems.filter(item => item.bookTitle !== bookName);
  setFavItems(updatedFavItems);
  setFavItemsCount(prevCount => prevCount - 1);
  // setToCart(favBook)
}

const handleRequestStock = (bookName) => {
  const updatedFavItems = favItems.filter(item => item.bookTitle !== bookName);
  setFavItems(updatedFavItems);
  setFavItemsCount(prevCount => prevCount - 1);
  setToRequestStock(bookName);
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
          setRequestedBookCount(request.length);
          toast.success('Request Saved!');
      }else{
        toast.warning('Already Requested!')
      }
  }
}

const setToCart = (id) => {
  const cart = getStoredCart();

  const isExist = cart.includes(id);
  if (!isExist) {
    cart.push(id);
    const cartStr = JSON.stringify(cart)
    const setToLs = localStorage.setItem('cart',cartStr);
  }

    
}

  return (
    <div className='w-full h-auto'>
      <Navbar cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} total={total}setTotal={setTotal} favItems={favItems} favItemsCount={favItemsCount} handleFavItemToCart={handleFavItemToCart} setCartItems={setCartItems} handleRequestStock={handleRequestStock} requestedBookCount={requestedBookCount} handleDeleteFromCart={handleDeleteFromCart}></Navbar>
      <Header></Header>
      <BookSection getBookDetails={getBookDetails} handleFavItems={handleFavItems}></BookSection>
      <NewsSection></NewsSection>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
