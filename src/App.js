import { BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css'
import Home from './components/Home';
const App = () => {
  return (
    <BrowserRouter>
    
      <Navbar />
      <Routes path="/home" element={<Home />}></Routes>
    </BrowserRouter>
  )
}
export default App;
