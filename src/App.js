import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';


function App() {
  const times = [
    {nome: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9'},
    {nome: 'Front-End', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF'},
    {nome: 'Data Sciense', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2'},
    {nome: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8'},
    {nome: 'UX e Design', corPrimaria: '#D86EBF', corSecundaria: '#FAE9F5'},
    {nome: 'Mobile', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9'},
    {nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF'}
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const handleNovoColaborador = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores)
  }

  return (
    <div className="App">
      <Banner/>
      <Form
        novoColaborador={colaborador => handleNovoColaborador(colaborador)}
        times={times.map(time => time.nome)}
      />
      {times.map(time=> 
        <Team 
          key={time.nome} 
          nome={time.nome}
          corPrimaria = {time.corPrimaria}
          corSecundaria = {time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
