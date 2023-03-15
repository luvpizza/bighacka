import Button from "../Inputs/Button/Button";
import TextInput from "../Inputs/TextInput/TextInput";
import "./RegisterForm.scss"
import {useEffect, useState} from "react";

const RegisterForm = ({className}) => {

    // const [firstName, setFirstName] = useState("") const [lastName, setLastName]
    // = useState("") const [middleName, setMiddleName] = useState("") const [email,
    // setEmail] = useState("")

    function arePasswordsSame(pass, confirmpass) {
        return (pass === confirmpass)
            ? true
            : false
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const [user,
        setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        validation: {
            email: false
        }
    })

    const handleClick = (e) => {
        e.preventDefault()
        console.log(user);
        if (/*user.validation.email*/
        validateEmail(user.email) && user.firstName.trim() && user.lastName.trim() && arePasswordsSame(user.password, user.confirmPassword)) {
            console.log("Normik");
        } else {
            // alert("Один и/или несколько полей заполнены неверно. Идите нахуй с сайта.")
        }

    }

    // let isEmailValidated = false
    const handleEmailInputChange = (e) => {
        setUser({
            ...user,
            email: e.target.value
        })

        // isEmailValidated = validateEmail(user.email) if(!!isEmailValidated){
        // e.currentTarget.style.color = "grey"     e.currentTarget.style.border = "1px
        // solid grey"     await setUser({...user,email:e.target.value, validation:
        // {...user.validation,         email: true     }}) }else{
        // e.currentTarget.style.border = "1px solid red"
        // e.currentTarget.style.color = "red"     await
        // setUser({...user,email:e.target.value, validation: {...user.validation,
        //   email: false     }}) }

    }

    // useEffect(()=>{     isEmailValidated = validateEmail(user.email)
    // if(!!isEmailValidated){         setUser({...user, email: user.email,
    // validation: {...user.validation, email: true}})         console.log(user);
    //  } else{         setUser({...user, validation: {...user.validation, email:
    // false}})         console.log(user);     } }, [user.email]) Потные мужчины
    // тягают железо

    return (
        <div className="register-form-div">
            <form className={className}>
                <h1 className="register-form__title">Создайте аккаунт и управляйте отчетами</h1>
                <div className="name-inputs">
                    <TextInput
                        type="text"
                        placeholder={"Имя"}
                        className="register-form__input register-form__input_firstname"
                        onChange={(e) => {
                        setUser({
                            ...user,
                            firstName: e.target.value,
                            validation: {
                                ...user.validation,
                                firstName: true
                            }
                        })
                    }}/>
                    <TextInput
                        type="text"
                        placeholder={"Фамилия"}
                        className="register-form__input register-form__input_lastname"
                        onChange={(e) => {
                        setUser({
                            ...user,
                            lastName: e.target.value
                        })
                    }}/>
                </div>

                <TextInput
                    type="email"
                    placeholder={"Почта"}
                    className="register-form__input register-form__input_email"
                    onChange={(e) => {
                    handleEmailInputChange(e)
                }}/>
                <TextInput
                    type="password"
                    placeholder={"Пароль"}
                    className="register-form__input register-form__input_password"
                    onChange={(e) => {
                    setUser({
                        ...user,
                        password: e.target.value
                    })
                }}/>
                <TextInput
                    type="password"
                    placeholder={"Подтвердите пароль"}
                    className="register-form__input register-form__input_repeat"
                    onChange={(e) => {
                    setUser({
                        ...user,
                        confirmPassword: e.target.value
                    })
                }}/>
                <Button
                    text="Создать аккаунт"
                    className="register-form__btn"
                    onClick={(e) => {
                    handleClick(e)
                }}></Button>
            </form>
        </div>
    );
}

export default RegisterForm;