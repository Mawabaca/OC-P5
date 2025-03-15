import './Header.scss'
import headerlogo from '../../assets/Logo-Header.webp';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='header-container'>
            <NavLink to="/">
                <img src={headerlogo} alt='Logo-Header' />
            </NavLink>
            <nav>
                <NavLink to="/">Accueil</NavLink>

                <NavLink to="/about">A propos</NavLink>
                
            </nav>
        </div>
    )
}


export default Header