import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Categorias from "./pages/Categorias";
import MeusPedidos from "./pages/MeusPedidos";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import ProdutosAlta from "./components/ProdutosAlta";
import Footer from "./components/Footer"
import "./index.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Menu/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/categorias" element={<Categorias/>} />
          <Route path="/meus-pedidos" element={<MeusPedidos/>} />
        </Routes>

        <ProdutosAlta/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
