import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { VscMenu } from "react-icons/vsc";
import { useState } from 'react';

export default function Header() {

    const [isVisible, setIsVisible] = useState(false)

    const handleClick = (e) => {
        setIsVisible(!isVisible)
        console.log(isVisible == true ? 'mostrar menu' : 'remover menu');
    } 

    return (
        <header className={`${styles.header} ${isVisible? styles.bottom : ''}`} >
            <div className={styles.header_brand}>
                {/* vai entrar um link */}
                <p>Cassio <br /><span>Dev.com</span></p>
            </div>

            <div className={styles.header_menu_hamburguer}>
                <VscMenu  className={styles.icon_hamburguer} onClick={handleClick}/>
            </div>

            <nav className={`${styles.header_nav_menu} ${isVisible? styles.show : ''}`}>
                {/* vai entrar link */}
                <Link  to={'/'}>Home</Link>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
            </nav>
        </header>
    )
}