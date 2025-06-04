import {useState,useEffect,useMemo, useRef} from 'react';
import usePortfolioService from '../services/PortfolioService';
import LoadingSpinner from './LoadingSpinner';

import Professional from '../assets/img/svgs/professional-info-icon.svg';
import Personal from '../assets/img/svgs/personal-info-icon.svg';
import Hobbies from '../assets/img/svgs/hobbies-icon.svg';
import Arrow from '../assets/img/icons/Vector.png';
import EmptyArrow from '../assets/img/icons/arrow-icon.png';
import Folder from '../assets/img/icons/folder-icon.png';
import Article from '../assets/img/icons/m1-icon.png';
import CloseIcon from '../assets/img/icons/close-icon.png';

function About() {
    const [content, setContent] = useState(null);
    const [category, setCategory] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [tabs, setTabs] = useState([{
        category: 0,
        folder: 0,
        article: 0,
        caption: 'personal-info',
        active: true
    }]);

    const [tabContent, setTabContent] =useState('default')
    const [height,setHeight] = useState(0);

    const {getAbout} = usePortfolioService();

    const loadContent = () =>{
        getAbout().then(setContent);
    }
    const windowChanged = () =>{
        setWindowWidth(window.innerWidth);
    }

    useEffect(()=>{
        if(tabContent==='default' && content!=null) {
            setTabContent(content[0].folders[0].articles[0].content)
        }
    },[content]);
    
    useEffect(()=>{
        loadContent();
        setWindowWidth(window.innerWidth);
    },[]);

    useEffect(()=>{
            window.addEventListener("resize", windowChanged);
        return () =>{
            window.addEventListener("resize", null);
        };
    },[windowWidth]);

    const lines = useRef();

    useEffect(()=>{
        try{
            setHeight(lines.current.scrollHeight);
        } catch{}
    },[tabContent,windowWidth]);

    const renderLinesEnum = () =>{
        
        const number = (n) => {
            return (
                <li key={n}>{n}</li>
            )
        }
        const items = () =>{            
            let result=[];
            for(let i=1;i<(height/40)+1;i++){
                result.push(number(i));
            }
            return result;
        }

        return (
            <>
            <ul className='list-none flex flex-col items-end mt-[17px] text-[22px] leading-10 text-secondaryGray'>
                {items()}
            </ul>
            </>
        )
    }

    const toggleMinimizeFolder = (folderIndex) => {
        let contentCopy = structuredClone(content);
        contentCopy[category].folders[folderIndex].minimized= !contentCopy[category].folders[folderIndex].minimized;
        setContent(contentCopy);
    }
    // const [tabs, setTabs] = useState(null);
    // const [tabContent, setTabContent] =useState('no text here')

    
    const articleClick = (folderIndex, articleIndex) =>{
        const newTab = {
            category: category,
            folder: folderIndex,
            article: articleIndex,
            caption: content[category].folders[folderIndex].articles[articleIndex].name,
            active: true
        };

        const exist = tabs.findIndex(item=>(item.category===newTab.category &&
                         item.folder === newTab.folder &&
                         item.article === newTab.article));
        
        if(exist>=0){
            onTabClick(exist);
        } else {
            if(tabs.length>2){
                setTabs([...tabs.map(item=>{
                    let disabled = item;
                    item.active = false;
                    return disabled;
                }).slice(1,10),newTab]);
            } else {
                setTabs([...tabs.map(item=>{
                    let disabled = item;
                    item.active = false;
                    return disabled;
                }),newTab]);
            }
        }
        setTabContent(content[category].folders[folderIndex].articles[articleIndex].content);
    }
    const removeTab = (index) => {
        let newTabs = [...tabs.slice(0,index),...tabs.slice(index+1,10)];
        setTabs([...newTabs]);
    }
    const onTabClick = (index) => {
        setTabs([...tabs.map((item,i)=>{
            let newItem = item;
            if(index===i){
                newItem.active = true;
            } else {
                newItem.active = false;
            }
            return newItem;
        })]);
        setTabContent(content[tabs[index].category].folders[tabs[index].folder].articles[tabs[index].article].content);
    }
    const renderTabs = () =>{
        const tabsArr = tabs.map((item,index)=>{
            return (
                <li 
                
                className={`${item.active?'text-secondaryWhite ':' text-secondaryGray '} flex border-r-[1px] items-center border-line text-[16px] pl-[14px] cursor-pointer`}
                 key={index}> <span onClick={()=>onTabClick(index)}>{item.caption}</span>  <img src={CloseIcon} alt="close tab" className='pl-[25px] pr-[5px] cursor-pointer' onClick={()=>removeTab(index)}/></li>
            )
        });

        return (
            <ul className='flex flex-row justify-center list-none'>
                {tabsArr}
            </ul>
        )
    }
    const renderFolders = () => {
        const cat = (category>=0?category:0);

        const listOfArticles = (index) => 
            content[cat].folders[index].articles.map((item,i)=>{
                return (
                    <>
                        <div 
                        onClick={()=>articleClick(index,i)}
                        className='flex min-h-[40px] md:min-h-[1px] justify-start items-center md:items-end text-[16px] mb-[6px] mt-[6px] ml-[37px] cursor-pointer'>
                            <img src={Article} alt="article" className='w-[16px] h-[14px]' />
                            <span className='leading-[100%] ml-[8px] text-secondaryGray'> {item.name}</span>
                        </div>
                    </>
                );
            });
        const listOfFolders = content[cat].folders.map((item,i)=>{
            return (
                <>
                    <div 
                    onClick={()=>toggleMinimizeFolder(i)}
                    className={`flex min-h-[20px] md:min-h-[1px] justify-start items-end text-[16px] mb-[10px] mt-[10px] ml-[16px] cursor-pointer ${item.minimized?'text-secondaryGray':'text-secondaryWhite'}`}>
                        <img src={EmptyArrow} alt="arrow" className={`w-[7.78px] h-[12.73px] ${item.minimized?'':' rotate-[90deg]'}`}/>
                        <img src={Folder} alt="folder" className={`w-[14.44px] h-[13px] ml-[13px] ${item.filter}`}/>
                        <span className=' leading-[65%] ml-[8px]'>{item.name}</span>
                    </div>
                    {item.minimized?'': listOfArticles(i)}
                </>
            )
        })
        return (
            <>
                    {listOfFolders}
            </>
        )
    }

    const activeTabCaption = () => {
        const index = tabs.findIndex(item => item.active);
        if(index>-1){
            return tabs[index].caption;
        } else return 'click on some article...';
    }
    const renderContent = () => {
        if(content!=null){
            if(windowWidth<930){
                return <>
                    <div className=' flex flex-col min-h-full'>
                        <span className='flex text-secondaryWhite text-[14px] my-[15px] ml-[27px]'> _about-me</span>
                        <div className='h-[40px] w-full flex items-center bg-line text-secondaryWhite text-[16px] my-[1.5px]'>
                            <span
                            onClick={()=>{category!==0?setCategory(0):setCategory(-1)}} 
                            className='flex justify-start items-center'>
                                <img src={Arrow} alt="arrow" className={`w-[8.5px] h-[6px] ml-[27px] mr-[12px] ${category===0?'':'-rotate-[90deg]'}`}/>
                                personal-info
                            </span>
                        </div>
                        <div>
                            {category===0?renderFolders():''}
                        </div>
                        <div className='h-[40px] w-full flex items-center bg-line text-secondaryWhite text-[16px] my-[1.5px]'>
                            <span
                            onClick={()=>{category!==1?setCategory(1):setCategory(-1)}} 
                            className='flex justify-start items-center'>
                                <img src={Arrow} alt="arrow" className={`w-[8.5px] h-[6px] ml-[27px] mr-[12px] ${category===1?'':'-rotate-[90deg]'}`}/>
                                professional-info
                            </span>
                        </div>
                        <div>
                            {category===1?renderFolders():''}
                        </div>
                        <div className='h-[40px] w-full flex items-center bg-line text-secondaryWhite text-[16px] my-[1.5px]'>
                            <span
                            onClick={()=>{category!==2?setCategory(2):setCategory(-1)}} 
                            className='flex justify-start items-center'>
                                <img src={Arrow} alt="arrow" className={`w-[8.5px] h-[6px] ml-[27px] mr-[12px] ${category===2?'':'-rotate-[90deg]'}`}/>
                                hobbies
                            </span>
                        </div>
                        <div>
                            {category===2?renderFolders():''}
                        </div>
                        <span className='flex text-secondaryWhite text-[14px] my-[15px] ml-[27px]'> {`// ${activeTabCaption()}`}</span>
                        <span 
                        className='text-[16px] text-secondaryGray leading-[24px] mx-[27px]'
                        style={{whiteSpace:'pre-line'}}>
                            {tabContent}
                        </span>
                    </div>
                </>;
            } else {
                
                return (
                    <>
                    
                    <div className='grid grid-cols-[68px_244px_1fr] h-fullWith125m'>
                        <div className='flex flex-col justify-start items-center border-r-[1px] border-line'>
                            <img src={Professional} alt="professional"
                            onClick={()=>setCategory(0)}
                             className={`h-[24px] w-[24px] my-[17px] cursor-pointer filterGray ${category==0? '':' opacity-[.4]'}`} />
                            <img src={Personal} alt="personal"
                            onClick={()=>setCategory(1)}
                             className={`h-[24px] w-[24px] my-[17px] cursor-pointer filterGray ${category==1? '':' opacity-[.4]'}`} />
                            <img src={Hobbies} alt="hobbies"
                            onClick={()=>setCategory(2)}
                             className={`h-[24px] w-[24px] my-[17px] cursor-pointer filterGray ${category==2? '':' opacity-[.4]'}`} />
                        </div>
                        {/* menu */}
                        <div className='flex flex-col items-start justify-start border-r-[1px] border-line'>
                            <div className='flex items-center h-[40px] w-full border-b-[1px] border-line mb-[10px]'>
                                <img src={Arrow} alt="arrow" className='h-[8px] w-[9px] ml-[14px]'/>
                                <span className='text-secondaryWhite text-[16px] ml-[11px]'> {`${category>-1?content[category].name:content[0].name}`}</span>
                            </div>
                            {renderFolders()}
                        </div>
                        {/* tabs */}
                        <div className='h-parent'>
                            <div className='flex h-[40px] w-full border-b-[1px] border-line'>
                                {renderTabs()}
                            </div>
                            <div className='grid grid-cols-[60px_1fr] text-secondaryWhite text-[30px] h-fullWith165m overflow-y-scroll'>
                                <div className=''>
                                    {renderLinesEnum()}
                                </div>
                                <div className='min-h-[100px] mt-[17px] text-[22px] leading-10 text-secondaryGray pl-[40px]'>
                                    <p  ref={lines}><span style={{whiteSpace:'pre-line'}}>{tabContent}
                                        </span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
        }
    }

    const page = useMemo(() => {
        // if(error) return (<> <h1>ERRROOOOOORR..</h1></>);
        // if (loading) return (<> <LoadingSpinner/></>);
        return renderContent();
    }, [content,category,windowWidth,tabs,tabContent,height]);

  return (
    <>
    {page}
    </>
  )
}

export default About