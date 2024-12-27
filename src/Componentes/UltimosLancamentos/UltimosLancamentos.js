import './UltimosLancamentos.css'
import { Livros } from './DadosUltimosLancamentos'

export const UltimosLancamentos = () => {
console.log(Livros)
    return (

        <section className='ultimos-lancamentos'>
            <h2>ULTIMOS LANÇAMENTOS</h2>
            <div className='novos-livros'>
                { Livros.map( livro => (
                    <img src={livro.src} />
                ))}
            </div>
        </section>

    )

}