import {useState,useMemo, useEffect} from 'react'

import usePortfolioService from '../services/PortfolioService';
import ProjectCard from './ProjectCard';

import HTMLicon from '../assets/img/icons/html-icon.png';
import CSSicon from '../assets/img/icons/css-icon.png';
import JSicon from '../assets/img/icons/js-icon.png';
import REACTicon from '../assets/img/icons/react-icon.png';
import Cicon from '../assets/img/icons/sharp-icon.png';
import ASPicon from '../assets/img/icons/aspnetcore-icon.png';
import SQLicon from '../assets/img/icons/sql-icon.png';
import Checked from '../assets/img/icons/Check-icon.png';

function Projects() {
    const [content, setContent] = useState(null);

    const [checkboxes, setCheckboxes] = useState(
        [true,true,false,true,false,true,true]
    )
    
    const {getProjects} = usePortfolioService();

    const loadContent = () =>{
        getProjects().then(setContent);
    }

    const toggleCheckbox = (i) => {
        setCheckboxes(
            [...checkboxes.slice(0,i), !checkboxes[i], ...checkboxes.slice(i+1,10)]
        );
    }
    useEffect(()=>{
        loadContent();
    },[]);

    const renderContent = () => {
        
        let techsArr = [];
        if (checkboxes[0]) techsArr.push('HTML');
        if (checkboxes[1]) techsArr.push('CSS');
        if (checkboxes[2]) techsArr.push('JavaScript');
        if (checkboxes[3]) techsArr.push('React');
        if (checkboxes[4]) techsArr.push('C#');
        if (checkboxes[5]) techsArr.push('ASP.NET Core');
        if (checkboxes[6]) techsArr.push('SQL');


        const projects = (content!=null)?(
            content.map((item,i)=>{
                if(item.techs.filter(x => techsArr.includes(x)).length>0){
                    return <ProjectCard ProjectInfo={item} key={i} />
                }
            })
        ) : ('');


        return (
            <>
            <div className='grid md:grid-cols-[312px_1fr] grid-rows-[auto_auto] md:grid-rows-[1fr] min-h-fullWith125m md:h-fullWith125m'
            >
                <div
                className='flex flex-col h-full border-r-[1px] border-line'
                >
                <span
                className='text-[14px] md:text-[16px] text-secondaryWhite border-b-[1px] border-line pl-[21px] md:pl-[45px] py-[21px] md:py-[10px]'
                > _projects</span>

                <ul className=' flex flex-col list-none py-[20px] border-b-[1px] border-line md:border-b-[0]'>
                    <li
                    onClick={()=>toggleCheckbox(0)}
                    className={`flex text-[14px] md:text-[16px]  py-[8px] pl-[22px]`}
                    >
                        {checkboxes[0]?(
                            <img src={Checked} alt='checkbox'
                            className='w-[18px] h-[18px] object-contain'></img>
                        ):(
                            <div className='w-[18px] h-[18px] border-[1px] border-line rounded-[2px]'></div>
                        )}
                        <span className={`flex ${checkboxes[0]?' filterWhite ':' filterGray '}`}>
                            <img
                                className='h-[24px] w-[24px] object-cover ml-[40px] mr-[15px]'
                                src={HTMLicon} alt="html icon" /> HTML
                        </span>
                    </li>
                    <li
                    onClick={()=>toggleCheckbox(1)}
                    className={`flex text-[14px] md:text-[16px] py-[8px] pl-[22px] `}
                    >
                        {checkboxes[1]?(
                            <img src={Checked} alt='checkbox'
                            className='w-[18px] h-[18px] object-contain'></img>
                        ):(
                             <div className='w-[18px] h-[18px] border-[1px] border-line rounded-[2px]'></div>
                        )}
                        <span className={`flex ${checkboxes[1]?' filterWhite ':' filterGray '}`}>
                            <img
                                className='h-[24px] w-[24px] object-cover ml-[40px] mr-[15px]'
                                src={CSSicon} alt="css icon" /> CSS
                        </span>
                    </li>
                    <li
                    onClick={()=>toggleCheckbox(2)}
                    className={`flex text-[14px] md:text-[16px]  py-[8px] pl-[22px]`}
                    >
                        {checkboxes[2]?(
                            <img src={Checked} alt='checkbox'
                            className='w-[18px] h-[18px] object-contain'></img>
                        ):(
                            <div className='w-[18px] h-[18px] border-[1px] border-line rounded-[2px]'></div>
                        )}
                        <span className={`flex ${checkboxes[2]?' filterWhite ':' filterGray '}`}>
                            <img
                                className='h-[24px] w-[24px] object-cover ml-[40px] mr-[15px]'
                                src={JSicon} alt="js icon" /> JavaScript
                        </span>
                    </li>
                    <li
                    onClick={()=>toggleCheckbox(3)}
                    className={`flex text-[14px] md:text-[16px] py-[8px] pl-[22px]`}
                    >
                        {checkboxes[3]?(
                            <img src={Checked} alt='checkbox'
                            className='w-[18px] h-[18px] object-contain'></img>
                        ):(
                             <div className='w-[18px] h-[18px] border-[1px] border-line rounded-[2px]'></div>
                        )}
                        <span className={`flex ${checkboxes[3]?' filterWhite ':' filterGray '}`}>
                        <img
                            className='h-[24px] w-[24px] object-cover ml-[40px] mr-[15px]'
                            src={REACTicon} alt="react icon" /> React
                        </span>
                    </li>
                    <li
                    onClick={()=>toggleCheckbox(4)}
                    className={`flex text-[14px] md:text-[16px]  py-[8px] pl-[22px]`}
                    >
                        {checkboxes[4]?(
                            <img src={Checked} alt='checkbox'
                            className='w-[18px] h-[18px] object-contain'></img>
                        ):(
                            <div className='w-[18px] h-[18px] border-[1px] border-line rounded-[2px]'></div>
                        )}
                        <span className={`flex ${checkboxes[4]?' filterWhite ':' filterGray '}`}>
                            <img
                                className='h-[24px] w-[24px] object-cover ml-[40px] mr-[15px]'
                                src={Cicon} alt="c sharp icon" /> C#
                        </span>
                    </li>
                    <li
                    onClick={()=>toggleCheckbox(5)}
                    className={`flex text-[14px] md:text-[16px]  py-[8px] pl-[22px]`}
                    >
                        {checkboxes[5]?(
                            <img src={Checked} alt='checkbox'
                            className='w-[18px] h-[18px] object-contain'></img>
                        ):(
                             <div className='w-[18px] h-[18px] border-[1px] border-line rounded-[2px]'></div>
                        )}
                        <span className={`flex ${checkboxes[5]?' filterWhite ':' filterGray '}`}>
                            <img
                                className='h-[24px] w-[24px] object-cover ml-[40px] mr-[15px]'
                                src={ASPicon} alt="asp icon" /> ASP.NET Core
                        </span>
                    </li>
                    <li
                    onClick={()=>toggleCheckbox(6)}
                    className={`flex text-[14px] md:text-[16px]  py-[8px] pl-[22px]`}
                    >
                        {checkboxes[6]?(
                            <img src={Checked} alt='checkbox'
                            className='w-[18px] h-[18px] object-contain'></img>
                        ):(
                             <div className='w-[18px] h-[18px] border-[1px] border-line rounded-[2px]'></div>
                        )}
                        <span className={`flex ${checkboxes[6]?' filterWhite ':' filterGray '}`}>
                            <img
                                className='h-[24px] w-[24px] object-cover ml-[40px] mr-[15px]'
                                src={SQLicon} alt="sql icon" /> SQL
                        </span>
                    </li>
                </ul>
                </div>
                <div
            className='relative flex flex-wrap justify-around px-[20px] py-[50px] md:h-fullWith125m md:overflow-y-scroll '
            >
                {projects}
            </div>
            </div>
            
            </>
        )
        
    }

    const page = useMemo(() => {
        // if(error) return (<> <h1>ERRROOOOOORR..</h1></>);
        // if (loading) return (<> <LoadingSpinner/></>);
        return renderContent();
    }, [content,checkboxes]);

  return (
    <>
    {page}
    </>
  )
}

export default Projects