import { useState, useMemo , useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact/Contact.jsx'
function App() {
  const [page,setPage] = useState('hello');

  const onPageChanged = (page) => {
    setPage(page);
  }

  const renderPage = (page) => {
    switch(page){
      case 'hello': return (
        <Hero/>
      );
      case 'about': return (
        <About />
      );
      case 'projects': return (
        <Projects />
      );
      case 'contact': return (
        <Contact />
      );
      default: {
        console.log(page);
        return <Hero/>
      }
    }
  };
    

  return (
    <>
    {/* main container */}
    <div className='
    grid relative
    p-0 mx-[10px] my-[10px]  min-h-fit  w-fullWith20 max-w-[100%]
    bg-primaryLight border-line border-[1px] rounded-[8px] box-border
    grid-rows-[56px_auto_49px]
    '> 
    <Navigation onPageChanged={onPageChanged}/>
    {renderPage(page)}
    <Footer />
    </div>
    </>
  )
}

export default App
