import React from 'react'

const News = () => {
  return (
    <div className='flex items-center gap-10 border-2 border-gray-200 rounded-3xl px-5 py-5'>
          <img src="https://i.ibb.co/K9mW7Dt/Photo-news.png" alt="news.png" />
          <div>
            <h1 className='font-medium text-lg'>The Secret Garden</h1>
            <hr className='border-2 border-[#FFCE1A] w-[20%] rounded-full my-4'/>
            <p className='text-sm'>Follow Mary Lennox on her journey of self-discovery as she tends to a neglected garden.</p>
            <div className='w-full flex items-center justify-between mt-3 text-xs'>
            <span>Jina Gray</span>
            <span>20 Jan 2002</span>
            </div>
          </div>
      </div>
  )
}

export default News