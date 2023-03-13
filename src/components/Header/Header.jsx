import "./Header.scss"

const Header = () => {

    // нужен динамический хедер, на главной/логине/регистрации кнопки [войти | регистрация], при входе - исчезают

    return ( 
            <header className="header">
                <div className="container">
                    <h1 className="header__logo header__logo_left-aligned">Kollabo</h1>
                </div>
            </header>
        );
}
 

export default Header;
