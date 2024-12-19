import './Header.css'
import Logo from '../Logo/index'
import ListaCabecalho from '../ListaCabecalho/index'
import IconesCabecalhos from '../IconesCabecalho/index'

export const Header = () => {
    
    return(
    <header className='App-header'>

        <Logo />
        <ListaCabecalho />
        <IconesCabecalhos />

      </header>
    )
    
}