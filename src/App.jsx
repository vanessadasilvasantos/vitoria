import './App.css'
import NavBar from './components/NavBar.jsx';
import About from './sections/About.jsx';
import Agenda from './sections/Agenda.jsx';

function App() {

  return (
    <>
      <NavBar />
      <div className='flex h-[90vh] justify-center items-center'>
        <img src='/imgs/homeImg.png' alt="Home" className='mx-auto'/>
      </div>
      <About />
      <Agenda />
    </>
  )
}

export default App
