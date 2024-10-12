import { useState, useMemo} from 'react'
import styles from '../assets/style';
import burgerOpen from '../assets/img/icons/burger-menu-icon.png';
import burgerClose from '../assets/img/icons/burger-menu-close-icon.png';

import telegramIcon from '../assets/img/icons/telegram-icon.png';
import githubIcon from '../assets/img/icons/github-icon.png';

function Navigation({onPageChanged}) {
    
    const [toggle, setToggle] = useState(false);
    const [activePage, setActivePage] = useState('hello');

    const onClick = (caption) => {
        setToggle(false);
        
        setActivePage(caption);
        onPageChanged(caption);
    }
    const onClickMenu = (t) => {
        setToggle(t);
    }
    const render = () => useMemo(()=>(
        <>
        
        <img src={!toggle?burgerOpen:burgerClose} alt="menu" onClick={()=>onClickMenu(!toggle)}
            className={`md:hidden z-20 flex bg-cover absolute cursor-pointer z-10
            top-[21px] right-[21px] h-[16px] ${!toggle?'w-[21px]':'w-[18px]'}`}/>
        <li className={`${styles.menuItem} ${styles.gray}
        md:border-r-[1px] w-full md:hidden 
        `}>pavel-dudarev</li>
        <nav className={`
        ${toggle? 'flex z-20 backdrop-blur-sm bg-[#01101b86] md:bg-primaryLight' : 'hidden md:flex'}
        md:h-[56px] h-fit md:w-full w-full flex-col md:flex-row
        md:border-b-[1px] border-line
         ml-auto absolute top-[56px] md:top-[0px] md:relative
        
        `}>
            <li className={`${styles.menuItem} ${styles.gray}
            md:border-r-[1px] md:min-w-[312px] hidden md:flex 
            `}>pavel-dudarev</li>
            <li onClick={()=>onClick('hello')}
            className={`${styles.menuItem} ${styles.white} ${activePage=='hello'?'md:text-secondaryWhite':'md:text-secondaryGray'}
            md:border-r-[1px] md:min-w-[121px] 
            ${(activePage==='hello')? styles.underline : ''}  cursor-pointer`}>_hello</li>
            <li onClick={()=>onClick('about')} 
            className={`${styles.menuItem} ${styles.white} ${activePage=='about'?'md:text-secondaryWhite':'md:text-secondaryGray'}
            md:border-r-[1px] md:min-w-[150px]
            ${(activePage==='about')? styles.underline : ''}  cursor-pointer`}>_about-me</li>
            <li onClick={()=>onClick('projects')} 
            className={`${styles.menuItem} ${styles.white} ${activePage=='projects'?'md:text-secondaryWhite':'md:text-secondaryGray'}
            md:border-r-[1px]  md:min-w-[150px]
            ${(activePage==='projects')? styles.underline : ''}  cursor-pointer`}>_projects</li>
            <li className='flex justify-center  w-full'></li>
            <li onClick={()=>onClick('contact')} 
            className={`${styles.menuItem} ${styles.white} ${activePage=='contact'?'md:text-secondaryWhite':'md:text-secondaryGray'}
            md:border-l-[1px] md:min-w-[150px]
            ${(activePage==='contact')? styles.underline : ''}  cursor-pointer`}>_contact-me</li>
        </nav>
        
        <nav className={`
         ${toggle?'absolute top-[290px] list-none flex h-[53px] justify-end z-20 items-center border-t-[1px] border-b-[1px] rounded-b-[16px] border-line w-full text-secondaryWhite backdrop-blur-sm bg-[#01101b86] md:hidden mt-auto' : 'hidden'}
        `}>
            <li className='w-full border-l-[1px] border-line pl-[20px] text-secondaryGray'>find me in:</li>
            <li className='w-[80px] h-full border-l-[1px] border-line
            flex justify-center flex-col mx-auto'><a href="https://t.me/Rinerte" className='flex justify-center'><img src={telegramIcon} alt="telegram icon" className='
            h-[20px] w-[20px] object-contain filterGray
            '/></a></li>
            <li className='w-[80px] h-full border-l-[1px] border-line
            flex justify-center flex-col mx-auto'><a href="https://github.com/Pariete" className='flex justify-center'><img src={githubIcon} alt="github icon" className='
            h-[20px] w-[20px] object-contain filterGray
            '/></a></li>
        </nav>
        
        </>
    ),[activePage,toggle]);

  return render();
}

export default Navigation