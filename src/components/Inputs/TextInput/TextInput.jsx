import "./TextInput.scss"

const TextInput = ({type,placeholder, className, onChange}) => {
    return (
        <input type={type} placeholder={placeholder} className={className} onChange={onChange}></input>
    );
}
 
export default TextInput;
