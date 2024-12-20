import './Pesquisa.css'
import Input from '../Input/index'

export const Pesquisa = () => {

    return(
        <section className='pesquisa'>
            <h2 className='titulo'>Já sabe por onde começar?</h2>
            <h3 className='subtitulo'>Encontre seu livro em nossa estante.</h3>
            <Input placeholder='Escrava a sua próxima leitura...' />
        </section>
    )

}