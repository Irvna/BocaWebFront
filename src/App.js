import { Component } from 'react';
import './App.css';
import { Busca } from './components/Busca';
import { Cabecalho } from './components/Cabecalho';
import { Lista } from './components/Lista';
import { Rodape } from './components/Rodape';

class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
    console.log({busca})
  }
  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {odas} = this.state;
    return(
      <section className='container'>

        <Cabecalho/>

        <div className='busca'> 
          <Busca
          busca={this.state.busca}
          buscaODA={this.buscaODA}
          />
          <p className='numero_oda'>  {odas.length} odas </p>
        </div>

        <div className='lista'>
          {odas.map(oda => (
            <Lista
            key={oda.id}
            nome={oda.nome}
            usuario={oda.usuario}
            descricao={oda.descricao}
            data_inclusao={oda.data_inclusao}
            palavras_chave={oda.palavras_chave}
            />
          ))}
        </div>
          
        <Rodape/>

      </section>
    )
  }

}

export default App;
