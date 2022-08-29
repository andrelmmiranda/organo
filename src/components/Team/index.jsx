import Colaborador from '../Colaborador';
import './team.css';

const Team = ({colaboradores, nome, corPrimaria, corSecundaria})=>{
    return(
        colaboradores.length > 0 &&
        <section className='time' style={{backgroundColor:corSecundaria}}>
            <h3 style={{borderBottomColor:corPrimaria}}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, i) => 
                    nome === colaborador.time && <Colaborador
                    key={i}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    background={corPrimaria}
                />
                )}
            </div>
        </section>
    );
}

export default Team;