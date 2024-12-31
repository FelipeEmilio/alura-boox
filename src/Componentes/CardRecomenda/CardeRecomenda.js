import './CardeRecomenda.css'

export const CardeRecomenda = ({titulo, subtitulo, descricao, img}) => {

    return (
        <div className='recomenda'>
            <div>
                <h3>{titulo}</h3>
                <h4>{subtitulo}</h4>
                <p>{descricao}</p>
            </div>
            <div>
                <img src={img} alt='imagem'/>
                <button className='botao'>Saiba mais</button>
            </div>
        </div>
    )   

}