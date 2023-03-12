
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginImage from "../../assets/images/lgpg_pplwork.png"
import "./LoginPage.scss"
import Footer from "../../components/Footer/Footer";

const LoginPage = () => {
    return ( 
        <div>
            <div className="main">
            <Header/>
                <div className="login__image">
                    <img src={LoginImage} alt="ppl" />
                </div>
                <LoginForm/>
                
            </div>
                <Footer/>
        </div>
     );
}
 
export default LoginPage;