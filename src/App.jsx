import './App.css'
import NavBar from './components/NavBar.jsx';
import About from './sections/About.jsx';
import Agenda from './sections/Agenda.jsx';
import Feedbacks from './sections/Footer.jsx';
import Services from './sections/Services.jsx';

function App() {

  return (
    <>
      <NavBar />
      <div id='home' className='flex h-[90vh] max-lg:h-[80vh] max-sm:h-[60vh] justify-center items-center max-sm:justify-start max-sm:mt-[-1rem]'>
        <div className='hidden max-sm:flex max-sm:flex-col max-sm:justify-between gap-4 max-sm:w-full'>
          <img src='/imgs/imgHomeMobile2.png' alt="Home" className='ml-auto mr-[10px] hidden max-sm:block'/>
          <img src='/imgs/imgHomeMobile1.png' alt="Home" className='mr-auto ml-[10px] hidden max-sm:block'/>
        </div>
        <img src='/imgs/homeImg.png' alt="Home" className='mx-auto max-sm:hidden'/>
      </div>
      <About />
      <Agenda />
      <Services />
      <Feedbacks />
    </>
  )
}

export default App
