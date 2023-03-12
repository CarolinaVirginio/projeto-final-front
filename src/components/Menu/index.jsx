import {Link} from "react-router-dom";

import styles from './styles.css';

export default function Menu() {
    return (
        <div class="menu">
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/categorias">Categorias</Link>
            <Link to="/meus-pedidos">Meus Pedidos</Link>
        </div>
    )
}
