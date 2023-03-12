import "./TextInput.scss"

const TextInput = ({type,placeholder, className}) => {
    return (
        <input type={type} placeholder={placeholder} className={className}></input>
    );
}
 
export default TextInput;
