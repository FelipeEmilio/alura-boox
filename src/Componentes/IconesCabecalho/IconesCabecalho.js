import './IconesCabecalho.css'
import Perfil from '../../Imagens/perfil.svg'
import Sacola from '../../Imagens/sacola.svg'

export const IconesCabecalhos = () => {

    const Icones = [Perfil, Sacola]

    return(
        <ul className='icones'>
            {Icones.map(icone => (<li className='icone'><img src={icone} /></li>) )}
        </ul>
    )

}