import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import MainLayout from './layout/MainLayout';
import "bootstrap/dist/css/bootstrap.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>} >
            <Route index element={<Home/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/detail' element={<ProductDetail/>} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App  
