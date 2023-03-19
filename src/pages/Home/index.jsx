import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import ColecoesDestaque from "../../components/ColecoesDestaque";
import ProdutosAlta from "../../components/ProdutosAlta";
// import OfertaEspecial from "";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <div>
            
            <Menu/>
            <Navbar/>
            <Carousel/>
            <ColecoesDestaque/>
            <ProdutosAlta/>
            {/* <OfertaEspecial/> */}
            <Footer/>
        </div>
    )
}
