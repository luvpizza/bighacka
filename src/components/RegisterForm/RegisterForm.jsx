import Button from "../Inputs/Button/Button";
import TextInput from "../Inputs/TextInput/TextInput";
import "./RegisterForm.scss"

const RegisterForm = ({className}) => {
    return ( 
        <div className="register-form-div">
        <form className={className}>
            <h1 className="register-form__title">Создайте аккаунт и управляйте отчетами</h1>
            <div className="name-inputs">
                <TextInput type="text" placeholder={"Имя"} className="register-form__input register-form__input_firstname"/>
                <TextInput type="text" placeholder={"Фамилия"} className="register-form__input register-form__input_lastname"/>
            </div>
            
            <TextInput type="email" placeholder={"Почта"} className="register-form__input register-form__input_email"/>
            <TextInput type="password" placeholder={"Пароль"} className="register-form__input register-form__input_password"/>
            <TextInput type="password" placeholder={"Подтвердите пароль"} className="register-form__input register-form__input_repeat"/>
            <Button text="Создать аккаунт" className="register-form__btn"></Button>
        </form>
        </div>
     );
}
 
export default RegisterForm;