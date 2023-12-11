import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import MainLayout from './layout/MainLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>} >
            <Route index element={<Home/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App  
