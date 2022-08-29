import './select.css';

const Select = ({label, itens, obrigatorio, alterar, valor})=>{
    const alterado = e =>{
        alterar(e.target.value)
    }
    return(
        <div className='select'>
            <label>{label}</label>
            <select onChange={alterado} value={valor} required={obrigatorio}>
                <option value="">Escolha seu time</option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Select;