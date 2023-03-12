import {Link} from "react-router-dom";

import styles from './styles.css';

import logo from '../../img/logo-digital-college.png'

export default function Navbar() {
    return (
        <nav class="navbar">
            <Link to="/">
                <img src={logo} alt="Digital College" class="logo" />
                <span>Digital College</span>
            </Link>
        </nav>
    )
}