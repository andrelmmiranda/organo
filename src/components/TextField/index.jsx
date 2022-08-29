import './textField.css';

const TextField = ({label, placeholder, obrigatorio, valor, alterar})=>{
    const digitado = e =>{
        alterar(e.target.value);
    }

    return(
        <div className='text-field'>
            <label>{label}</label>
            <input value={valor} onChange={digitado} placeholder={placeholder} required={obrigatorio}/>
        </div>
    );
}

export default TextField;