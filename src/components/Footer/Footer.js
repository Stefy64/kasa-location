import Logo from '../../assets/images/FooterLogo.svg';
import '../Footer/Footer.css'

function Footer() {
    return (
        <footer className='footer-container'>
          <img className='footer-logo' src={Logo}  alt="logo kasa" />
          <p className='footer-text'>© 2023 Kasa. All rights reserved</p>
        </footer>  )  
}

export default Footer