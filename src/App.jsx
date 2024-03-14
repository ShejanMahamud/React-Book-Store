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



const [total,setTotal] = useState(0);




const getBookDetails = (bookName, bookPrice) => {
  const priceInNum = Number(bookPrice.replace("TK.",''));
  const newCartItems = {bookName,bookPrice};
  setCartItems((prev)=>[...prev, newCartItems])
setbookName(bookName);
setBookPrice(bookPrice);
setTotal(total+priceInNum);
}


  return (
    <div className='w-full h-auto'>
      <Navbar cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} total={total}setTotal={setTotal}></Navbar>
      <Header></Header>
      <BookSection handleCartCount={handleCartCount} getBookDetails={getBookDetails}></BookSection>
    </div>
  )
}

export default App
