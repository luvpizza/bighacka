import "./LoginForm.scss"

const LoginForm = () => {

    const handleClick = (e) => {
        e.preventDefault()

    }

    return ( 
        <form action="none" className="login-form">
            <h1 className="login-form__title">Войдите в систему и начните работать</h1>
            <div className="login-form__inputs">
                <input type="email" className="login-form__input login-form__input_email" placeholder="Почта"/>
                <input type="password" className="login-form__input login-form__input_password" placeholder="Пароль"/>
                <button className="login-form__btn">Войти</button>
            </div>
            <p className="login-form__subtext"> Нет аккаунта? <strong className="login-form__subtext_link">Зарегистрируйтесь</strong> </p>
        </form>
     );
}
 
export default LoginForm;