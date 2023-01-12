import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Error from './pages/Error'

function App() {

  return (
    <><BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter></>

  )
}

export default App
