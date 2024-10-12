import {useState, useMemo} from 'react'

function ProjectCard({ProjectInfo}) {
    const [state, setState] = useState('minimized');

    const image = ProjectInfo.image[Object.keys(ProjectInfo.image)[0]];
    const name = ProjectInfo.name;
    const caption = ProjectInfo.shortDescription;
    const description = ProjectInfo.fullDescription;
    const gitLink = ProjectInfo.gitLink;
    const link = ProjectInfo.projectLink;
    const techs = ProjectInfo.techs;

    const toggleState = (text) => {
        setState(text);
        switch(text){
            case 'maximized':
                document.getElementsByTagName("body")[0].style.overflowY = "hidden";
                break;
            case 'minimized':
                document.getElementsByTagName("body")[0].style.overflowY = "auto";
                break;
        }
    }
    const renderContent = () =>{
        
        let techsText = techs.slice(0,2).join(',');
        if(techs.length>2){
            techsText+=',...';
        }
        const result = (state==='minimized')?(
            <>
                <div className='flex flex-col md:w-[370px] w-[240px] md:h-[350px] h-[227px] relative md:mx-[30px] mt-[15px] md:mt-[40px]'>
                    <span className='flex leading-[21px] text-[16px] text-accentBlue mb-[15px]'> {name} <span className='hidden md:inline-block text-secondaryGray pl-[5px]'>{'//'}{techsText} </span></span>
                    
                    
                    <div className='flex flex-col h-full w-full rounded-[15px] bg-primaryLight border-[1px] border-line'>
                        <img 
                        className='w-full h-[90px] md:h-[175px] border-b-[1px] border-line rounded-t-[15px] object-cover '
                        src={image} alt="name" />
                        <span
                        className='md:px-[31px] px-[15px] md:pt-[24px] pt-[10px] leading-[150%] text-secondaryGray md:text-[18px] text-[14px]'
                        >{caption}</span>
                        <button 
                        onClick={()=>toggleState('maximized')}
                        className='absolute md:left-[20px] left-[10px] md:bottom-[20px] bottom-[10px] w-[129px] md:h-[38px] h-[30px] border-none rounded-[8px] bg-line text-secondaryWhite hover:brightness-150'
                        >
                            Show more
                        </button>
                    </div>
                </div>
            </>
        ) : (
            <>
            <div className='fixed left-0 top-0 flex flex-col h-[100svh] w-[100svw] z-50 backdrop-brightness-50 backdrop-blur-2xl overflow-y-auto md:px-[20%] md:py-[10%] px-[20px] py-[10%] box-border'>
                <h2 className='text-[25px] pl-[40px] text-accentBlue border-b-[1px] border-line md:min-w-[250px] min-w-[100px]'
                >{name}</h2>
                <span
                style={{whiteSpace:'pre-wrap'}}
                className='mt-[40px] text-[16px] text-secondaryWhite border-b-[1px] border-line min-w-[250px] leading-[165%]'
                >
                    {description}
                </span>
                <span
                style={{whiteSpace:'pre-wrap'}}
                className='mt-[20px] text-[16px] text-accentGreen border-b-[1px] border-line min-w-[250px] leading-[165%]'
                >
                    Technologies:&nbsp;
                    <span className='text-secondaryWhite'>
                    {techs.join(', ')}
                    </span>
                </span>
                {(gitLink!=null)?(
                    <a href={gitLink} target='_blank'
                    className='w-full text-accentOrange text-[20px] bg-primaryLight my-[10px] pl-[30px]'
                    >{'->'}GitHub Link{'<-'}</a>
                ):(
                    ''
                )}
                {(link!=null)?(
                    <a href={link} target='_blank'
                    className='w-full text-accentGreen text-[25px] bg-primaryDark my-[10px] pl-[30px]'
                    >{'->'}Project link{'<-'}</a>
                ):(
                    ''
                )}
                <button 
                        onClick={()=>toggleState('minimized')}
                        className='mt-[40px] w-[129px] h-[38px] border-none rounded-[8px] bg-line text-secondaryWhite hover:brightness-150'
                        >
                            {'<-'} BACK
                </button>
            </div>
            </>
        );
        return result;
    }

    const content = () => useMemo(()=>{
        return renderContent();
    },[state]);

  return (
    <>
    {content()}
    </>
    
  )
}

export default ProjectCard