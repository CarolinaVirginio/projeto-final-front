import {Link, useLocation} from "react-router-dom";

import './styles.css';

export default function Menu() {
    return (
        <div className="menu">
            <Link to="/" className={useLocation().pathname === '/' ? 'selected-link' : ''}>Home</Link>
            <Link to="/produtos" className={useLocation().pathname === '/produtos' ? 'selected-link' : ''}>Produtos</Link>
            <Link to="/categorias" className={useLocation().pathname === '/categorias' ? 'selected-link' : ''}>Categorias</Link>
            <Link to="/meus-pedidos" className={useLocation().pathname === '/meus-pedidos' ? 'selected-link' : ''}>Meus Pedidos</Link>
        </div>
    )
}
