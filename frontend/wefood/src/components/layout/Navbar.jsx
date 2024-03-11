import { Link } from "react-router-dom"
import logo from '../../assets/img/logo.png'
import styles from './Navbar.module.css'



export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src={logo} alt="We Food" />
                <h2>WeFood</h2>
            </div>
            <ul>
                <li>
                    <Link to={'/'}>Receitas</Link>
                </li>
                <li>
                    <Link to={'/login'}>Entrar</Link>
                </li>
                <li>
                    <Link to={'/register'}>Cadastrar</Link>
                </li>
            </ul>
        </nav>
    )
}