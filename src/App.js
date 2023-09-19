
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';

import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <ItemListContainer/>

        {/* <Routes>

          <Route path='/' element={<ItemListContainer greeting='Este es Home donde van todos los productos' />} />

        </Routes> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
