
import './App.css';
import Navbar from '../src/Components/Navbar';
import ItemListContainer from '../src/Components/ItemListContainer'; 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos Somos lideres en venta de lenceria para hombre y mujer....."/>

    </div>
  );
}

export default App;
