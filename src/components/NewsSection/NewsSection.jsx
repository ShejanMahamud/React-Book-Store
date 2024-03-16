import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import News from '../News/News';

const NewsSection = () => {

  const [news, setNews] = useState([]);

useEffect(()=>{
  fetch('https://raw.githubusercontent.com/ShejanMahamud/React-Book-Store/main/src/NewsData/news.json')
  .then(res => res.json())
  .then(data => setNews(data))
},[])


  return (
    <div className='w-[90%] mx-auto my-28 font-inter'>
      <h1 className='text-2xl font-semibold mb-10 uppercase'>News</h1>

      <div>
      <Swiper 
  modules={[Navigation]}
 spaceBetween={30}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      > 
      {
          news.map(news=> (<SwiperSlide><News key={news.news_id} news={news}></News></SwiperSlide>))
      }</Swiper>
      </div>
    </div>
  )
}

export default NewsSection