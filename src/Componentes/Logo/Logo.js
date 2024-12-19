import './Logo.css'
import logo from '../../Imagens/logo.svg';

export const Logo = () => {

    return(
        <div className="logo">
            <img src={logo} alt='logo'/>
            <p><strong>Alura</strong>Books</p>
        </div>
    )

}