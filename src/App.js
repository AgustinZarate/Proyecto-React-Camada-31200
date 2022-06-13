import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './Container/ItemDetailContainer';


function App() {
  const greeting = "Hola Luna, Bienvenida a mi tienda virtual"
  return (
    <div className="App container">
      <NavBar/>
{/*       <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
