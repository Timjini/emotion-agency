import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Home1 from './pages/Home1'
import Home2 from './pages/Home2'

function App() {

  return (
    <><BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/home" element={<Home1/>} />
        <Route path="/home2" element={<Home2/>} />
      </Routes>
      <Footer />
    </BrowserRouter></>

  )
}

export default App
