import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Signup from './pages/signup';
import CartPage from './pages/cartPage';
import Skeleton from './component/skeleton'





function App() {
  return (
    <>
    <Skeleton>
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </Skeleton>
    </>
  )
}

export default App

