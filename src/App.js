import "bootstrap/dist/css/bootstrap.min.css"
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarraNav from './components/BarraNav.jsx';
import Home from './views/Home.jsx';
import Pokemones from './views/Pokemones.jsx'
import Detalle from './views/Detalle.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
      <BarraNav></BarraNav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pokemones" element={<Pokemones></Pokemones>}></Route>
        <Route path="/pokemones/:id" element={<Detalle></Detalle>}></Route>
        <Route path="*" element={<div>Error :c</div>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
