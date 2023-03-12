
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterImage from "../../assets/images/regpg_guy.png"
import "./RegisterPage.scss"
import Footer from "../../components/Footer/Footer";
import RegisterForm from "../../components/RegisterForm/RegisterForm";


const RegisterPage = () => {
    return ( 
        <div>
            <div className="main">
            <Header/>
                <div className="register-page__bg-image">
                    <img src={RegisterImage} alt="guy" />
                </div>
                <RegisterForm className="register-page__register-form"/>
                
            </div>
                <Footer/>
        </div>
     );
}
 
export default RegisterPage;