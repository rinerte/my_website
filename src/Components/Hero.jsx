import React from 'react';
import styles from '../assets/style';
import gameImg from '../assets/img/game.png';

import { GAME } from './Game';

function Hero() {

  window.addEventListener('keydown', (e) => {  
    if (e.code === 'Space' && e.target === document.body) {  
      e.preventDefault();  
    }  
  });
  
  const onStartClick = () => {
    const start_btn = document.getElementById(`start_button`);
    start_btn.style.display = 'none';

    let image = new Image();
        image.src = gameImg;
        image.onload = () => {
          Promise.all([
            createImageBitmap(image, 0, 0, 60, 50), //player
            createImageBitmap(image, 60, 0, 45, 45), // enemy
            createImageBitmap(image, 105, 0, 5, 20) //bullet
          ]).then((sprites) => {
            GAME.Start(240,405, sprites[0], sprites[1], sprites[2]);

          });
        };

        document.addEventListener('GameOver', ()=>{
          const restart_div = document.getElementById(`restart`);
          restart_div.style.display = 'flex';
  
          const restart_btn = document.getElementById(`restart_button`);
          restart_btn.addEventListener('click',()=>{
              restart_div.style.display = 'none';
              GAME.Restart();
          });
        });
  }

  return (
    <>
    <div className="absolute z-0 w-[255px] h-[277px] top-[120px] md:top-[25%] md:left-[50%] -left-[50px] md:scale-[1.4] -rotate-[94deg] green__gradient"/>
    <div className="absolute z-0 w-[200px] h-[210px] top-[275px] md:top-[65%] left-[150px] md:left-[75%] md:scale-[1.4] -rotate-[94deg] blue__gradient"/>
    {/* left */}
    <div className='flex md:mx-auto'>
      <div className='flex flex-col justify-center items-start h-fullWith125m w-full box-border p-0 m-0 z-10 md:pt-[50px]'>
        <h2 className='text-secondaryWhite text-[18px] m-0 pl-[27px] md:pl-[5px] pt-[96px] md:pt-0 leading-[100%]'>
          Hi all. I am
        </h2>
        <h1 className='text-secondaryWhite text-[62px] pl-[23px] md:pl-0 mt-[5px] leading-[100%]'>Pavel Dudarev</h1>
        <h2 className='text-accentGreen text-[20px] md:text-[32px] pl-[27px] md:pl-0 mt-[5px] leading-[100%]'>
          &gt; Software developer
        </h2>
        <span className='text-secondaryGray hidden md:block md:text-[16px] pl-[27px] md:pl-0 mt-[100px]'>
        {'// play the game and check other pages'}
        </span>
        <span className='text-secondaryGray text-[14px] md:text-[16px] pl-[27px] md:pl-0 mt-[100px] md:mt-[5px]'>
        {'// find my profile on GitHub:'}
        </span>
        <span className='text-secondaryWhite text-[14px] md:text-[16px] pl-[27px] md:pl-0 mt-[5px]'>
        <span className='text-accentBlue'>const </span>
        <span className='text-accentGreen'>githubLink </span> = 
        <span className='text-accentOrange mb-[85px]'>
          <a href="https://github.com/rinerte"
          className='text-accentOrange active:text-accentOrange  leading-[100%] hover:text-accentOrange no-underline'> &quot;https://github.com/rinerte&quot;</a></span>
        </span>
      </div>

      {/* Right */}
      <div className='hidden md:flex flex-col justify-center items-start h-fullWith125m pt-[50px] m-0 ml-[100px] z-10'> 
        {/* game */}
        <div className='grid w-[510px] h-[475px] grid-cols-[1fr_1fr] relative
        border-[1px] border-[#0C1616] shadow-[inset_0px_2px_0px_rgba(255,255,255,0.3)] rounded-[8px] bg-[linear-gradient(150.26deg,_rgba(23,85,83,0.7)_1.7%,_rgba(67,217,173,0.091)_81.82%)]
        '>
          {/* bolts */}
          <div className={`${styles.bolt} left-[13px] top-[13px]`}></div>
          <div className={`${styles.bolt} right-[13px] top-[13px]`}></div>
          <div className={`${styles.bolt} right-[13px] bottom-[13px]`}></div>
          <div className={`${styles.bolt} left-[13px] bottom-[13px]`}></div>
            <div id="game" className='block w-[240px] h-[405px] mx-[45px] my-[30px] mr-[25px] shadow-[inset_1px_5px_11px_rgba(2,18,27,0.71)] rounded-[8px]'>
              <canvas id="cnv" className='w-[240px] h-[405px] bg-[rgba(1,22,39,0.84)] shadow-[inset_1px_5px_11px_rgba(2,18,27,0.5)] rounded-[8px]'></canvas>
            <div id="start_button" className='flex flex-row justify-center items-center px-[10px] py-[14px] gap-[10px] absolute w-[112px] h-[38px] left-[105px] top-[320px] bg-accentOrange rounded-lg cursor-pointer text-[14px]' onClick={() =>onStartClick()}>start-game</div>
              <div id="restart" className='hidden absolute w-[239px] h-[48px] left-[46px] top-[300px] bg-[rgba(1,22,39,1)] shadow-[inset_1px_5px_11px_rgba(2,18,27,0.71)] rounded-lg text-[24px] font-[450] leading-[100%] items-center justify-center'>GAME OVER!
                  <div id="restart_button" className='absolute w-[100px] h-[100px] top-[150%] font-[450] text-[14px] leading-[18px] text-[#607B96] underline cursor-pointer'>start-again</div>
              </div>
            </div>
            <div className='grid grid-rows-[134px_1fr] text-[14px] leading-[25px] text-secondaryWhite m-[35px_0]'>
              <div className='flex p-[15px_12px] flex-col w-[180px] box-border h-[100%] bg-[rgba(1,20,35,0.19)] rounded-lg '>
                  <div>{'// A,D - move'}</div>
                  <div>{'// SPACE - shoot'}</div>
                  <div className='grid gap-[4px] grid-cols-[1fr_2fr_1fr] w-full h-full mt-[15px]'>
                  <div className={`${styles.buttonGame}`}>A</div>
                  <div className={`${styles.buttonGame}`}>Space</div>
                  <div className={`${styles.buttonGame} border-b-[1px]`}>D</div>
                  </div>
              </div>
              <div className='p-[15px_12px]'>
                  {'// score:'}
                  <span  id="score" className='p-[10px_24px] block text-[18px]'>0</span>
              </div>
              </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero