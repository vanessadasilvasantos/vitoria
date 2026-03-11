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
      <div id='home' className='flex h-[90vh] max-lg:h-[80vh] max-sm:h-[60vh] justify-center items-center'>
        <img src='/imgs/homeImg.png' alt="Home" className='mx-auto'/>
      </div>
      <About />
      <Agenda />
      <Services />
      <Feedbacks />
    </>
  )
}

export default App
