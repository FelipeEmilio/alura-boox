import './UltimosLancamentos.css'
import { Livros } from './DadosUltimosLancamentos'
import CardeRecomenda from '../CardRecomenda/index'
import imagemLivro from '../../Imagens/livro2.png'

export const UltimosLancamentos = () => {

    return (

        <section className='ultimos-lancamentos'>
            <h2>ÚLTIMOS LANÇAMENTOS</h2>
            <div className='novos-livros'>
                { Livros.map( livro => (
                    <img src={livro.src} alt='livros'/>
                ))}
            </div>
            <CardeRecomenda 
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </section>

    )

}