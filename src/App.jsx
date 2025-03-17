import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Logement from './pages/Logement/Logement'
import Error from './pages/Error/Error'

function App() {

  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />}/>
          <Route path="/logement/:id" element={<Logement />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      <Footer/>
    </>
    
  )
}

export default App
