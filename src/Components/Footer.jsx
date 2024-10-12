import React from 'react'
import telegramIcon from '../assets/img/icons/telegram-icon.png';
import githubIcon from '../assets/img/icons/github-icon.png';

function Footer() {
  return (
    <div className='hidden md:flex justify-center items-center h-[49px] border-t-[1px] border-line backdrop-blur-md z-10'>
        <span className='flex items-center text-[16px] pl-[15px] text-secondaryGray h-full w-[156px] border-r-[1px] border-line'> find me in:</span>
        <a href="https://t.me/Rinerte" className='hover:brightness-200 hover:border-primaryLight flex justify-center items-center h-full w-[60px] border-r-[1px] border-line'>
          <img src={telegramIcon} alt="telegram icon" className=' h-[22px] w-[24px] filterGray'/></a>
        <span className='w-full  '></span>
        <a href="https://github.com/Pariete" className='hover:brightness-200 hover:border-primaryLight flex justify-center items-center h-full w-[200px] border-l-[1px] border-line text-[16px] text-secondaryGray' >
          <span className='pr-[10px] '>@pariete</span> 
          <img src={githubIcon} alt="github icon" className=' h-[24px] w-[24px] filterGray'/></a>
    </div>
  )
}

export default Footer