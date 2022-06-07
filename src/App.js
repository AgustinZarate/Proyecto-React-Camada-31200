import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';


function App() {
  const greeting = "Hola Luna, Bienvenida a mi tienda virtual"
  return (
    <div className="App container">
      <NavBar/>
      <ItemListContainer mensaje = {greeting}/>
    </div>
  );
}

export default App;
