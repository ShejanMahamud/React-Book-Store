import React from 'react';
import AnimationSvg from './Animation.svg';

const Header = () => {
  return (
    <header className='font-inter text-[#0D0842] grid-cols-1 grid lg:grid-cols-2 row-auto items-center my-28 mx-auto w-[90%] justify-items-end'>
        <div className='*:mb-10'>
            <h1 className='text-4xl font-medium'>
            New Releases This Week
            </h1>
            <p>
            It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
            </p>
            <button className='bg-[#FFCE1A] px-10 py-3 rounded-lg text-white font-bold'>
                Subscribe
            </button>
        </div>
        <div>
            <img src={AnimationSvg} alt="hero.svg" />
        </div>
    </header>
  )
}

export default Header;
