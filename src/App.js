import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Categorias from "./pages/Categorias";
import MeusPedidos from "./pages/MeusPedidos";
import ColecoesDestaque from "./components/ColecoesDestaque";
import ColecoesDestaqueIcones from "./components/ColecoesDestaqueIcones";

export default function App() {
  return (
    <div>
      <BrowserRouter>
 
        <ColecoesDestaque/>
        <ColecoesDestaqueIcones/>
        

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/categorias" element={<Categorias/>} />
          <Route path="/meus-pedidos" element={<MeusPedidos/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
