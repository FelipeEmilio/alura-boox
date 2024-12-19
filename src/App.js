import './App.css';
import IconesCabecalhos from './Componentes/IconesCabecalho/index';
import ListaCabecalho from './Componentes/ListaCabecalho/index';
import Logo from './Componentes/Logo/index'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>

        <Logo />
        <ListaCabecalho />
        <IconesCabecalhos />

      </header>
    </div>
  );

}

export default App;
