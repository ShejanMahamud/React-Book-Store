import { useState } from 'react';
import BookSection from './components/BookSection/BookSection';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';



function App() {
  const [cartCount, setCartCount] = useState(0);
  const handleCartCount = () => {
    setCartCount(cartCount + 1);
  }

  const [bookName, setbookName] = useState('');
const [bookPrice, setBookPrice] = useState('');
const [cartItems, setCartItems] = useState([]);
const getBookDetails = (bookName, bookPrice) => {
  const newCartItems = {bookName,bookPrice};

  setCartItems((prev)=>[...prev, newCartItems])
setbookName(bookName);
setBookPrice(bookPrice);
}

  return (
    <div className='w-full h-auto'>
      <Navbar cartCount={cartCount} cartItems={cartItems}></Navbar>
      <Header></Header>
      <BookSection handleCartCount={handleCartCount} getBookDetails={getBookDetails}></BookSection>
    </div>
  )
}

export default App
