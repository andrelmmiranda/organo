import './button.css';

const Button = ({children, disabled})=>{
    return(
        // <button className='button'>{texto}</button>
        <button className='button' disabled={disabled}>{children}</button>
    );
}

export default Button;