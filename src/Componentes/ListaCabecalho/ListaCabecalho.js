import './ListaCabecalho.css'

export const ListaCabecalho = () => {

    const TextoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA-ESTANTE']

    return (

        <ul className='opcoes'>
            {TextoOpcoes.map( texto => (<li className='opcao'><p>{texto}</p></li>) )}
        </ul>
        
    )
}