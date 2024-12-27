import './Pesquisa.css'
import Input from '../Input/index'
import { useState } from 'react'
import { Livros } from './DadosPesquisa'

export const Pesquisa = () => {

    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    console.log(livrosPesquisados)

    return(
        <section className='pesquisa'>
            <h2 className='titulo'>Já sabe por onde começar?</h2>
            <h3 className='subtitulo'>Encontre seu livro em nossa estante.</h3>
            <Input 
                placeholder='Escrava a sua próxima leitura...' 
                onBlur={evento => {
                    const TextoDigitado = evento.target.value
                    const resultadoPesquisa = Livros.filter( livro => livro.nome.includes(TextoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />

            { livrosPesquisados.map( livro => (
                <div className='resultado'>
                    <p>{livro.nome}</p>
                    <img src={livro.src}/>
                </div>
            ) ) }

        </section>
    )

}