import './Footer.scss'
import footerlogo from '../../assets/Logo-Footer.webp';


function Footer() {
    return (
        <div className="footer-container">
            <img src={footerlogo} alt='Logo-Footer' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}


export default Footer