import './form.css';
import TextField from "../TextField";
import Select from '../Select';
import Button from '../Button';
import { useState } from 'react';

const Form = ({novoColaborador, times})=>{

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const save = e =>{
        e.preventDefault();
        novoColaborador({nome, cargo, imagem, time});
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return(
        <section className="form">
            <form action="" onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    obrigatorio={true}
                    valor={nome}
                    alterar={valor => setNome(valor)}
                />
                <TextField 
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    obrigatorio={true}
                    valor={cargo}
                    alterar={valor => setCargo(valor)}
                />
                <TextField
                    label="Imagem" 
                    placeholder="Digite o endereço de sua imagem"
                    valor={imagem}
                    alterar={valor => setImagem(valor)}
                />
                <Select
                    label="Times"
                    itens={times} 
                    obrigatorio={true}
                    valor={time}
                    alterar={valor => setTime(valor)}
                />
                {/* <Button texto="Criar Card"/> */}
                <Button disabled={time=='' || nome=='' || cargo=='' ? true: false}>Criar Card</Button>
            </form>
        </section>
    );
}

export default Form;