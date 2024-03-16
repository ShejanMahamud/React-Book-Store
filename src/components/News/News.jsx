import React from 'react';

const News = ({news}) => {
    
    const {news_title,news_description,news_author,news_date,news_image} = news;

  return (
    <div className='flex items-center gap-10 border-2 border-gray-200 rounded-3xl px-5 py-5'>
          <img src={news_image} alt="news.png" className='w-[100px] rounded-lg'/>
          <div>
            <h1 className='font-medium text-lg'>{news_title}</h1>
            <hr className='border-2 border-[#FFCE1A] w-[20%] rounded-full my-4'/>
            <p className='text-sm'>{news_description}</p>
            <div className='w-full flex items-center justify-between mt-3 text-xs'>
            <span>{news_author}</span>
            <span>{news_date}</span>
            </div>
          </div>
      </div>
  )
}

export default News