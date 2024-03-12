import * as React from 'react'
import BookSection from './components/BookSection/BookSection'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='w-full h-auto'>
      <Navbar></Navbar>
      <Header></Header>
      <BookSection></BookSection>
    </div>
  )
}

export default App