import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './Container/ItemDetailContainer';
import CartContainer from './Container/CartContainer';
import Footer from './Components/footer/Footer';
import { CartContextProvider } from './context/CartContext';


function App() {
  return (
    <CartContextProvider>
        <div className="App container">
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer />}/>
                <Route path='/categoria/:catId' element={<ItemListContainer />}/>
                <Route path='/detalle/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<CartContainer />}/>
                <Route path='*' element={<Navigate to='/'/>}/>
              </Routes>
            <Footer />
          </BrowserRouter>
        </div>
    </CartContextProvider>
  );
}

export default App;
