import "./LoginForm.scss"
import { Link, useNavigate } from "react-router-dom"
import TextInput from "../Inputs/TextInput/TextInput"
import Button from "../Inputs/Button/Button"
import { useState } from "react"
import axios from "axios"

const LoginForm = ({className}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const login = async (email, password) => {
        try {
          const response = await axios.post(
            "http://localhost:8080/login",
            { email, password }
          )
          return response.data;
        } catch (error) {  
          alert("Ошибка");
          throw error
        }
      }

      const getProfile = async (token) =>{
        try{
            const response = await axios.get("http://localhost:8080/profile",{
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            })
            return response.data
        } catch(error){
            throw error;
        }
      }

    let role = 1
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        
        //  фейк логин в зависимости от роли
        switch (role){
            default: break;

            case 1:
                navigate("/profile")
                break;
            case 2:
                navigate("/moderator")
                break;
            
        }

        // 

        if(email && password){
            console.log(email, password);
            const data = await login(email,password)
            // сразу пытаемся войти в профиль
            if(data){
                localStorage.setItem("token", data.token)
                const profileInfo = await getProfile(localStorage.getItem("token"));
                console.log(profileInfo)


            }
            

        }else{
            console.log("no inputs");
        }
    }

    return ( 
        <form action="none" className={className}>
            <h1 className="login-form__title">Войдите в систему и начните работать</h1>
            <div className="login-form__inputs">
                <TextInput type="email" className="login-form__input login-form__input_email" placeholder="Почта" onChange={(e)=>{setEmail(prev => e.target.value)}}/>
                <TextInput type="password" className="login-form__input login-form__input_password" placeholder="Пароль" onChange={(e)=>{setPassword(prev => e.target.value)}}/>
                <Button className="login-form__btn" text={"Войти"} onClick={(e)=>{handleClick(e)}}>Войти</Button>
            </div>
            <p className="login-form__subtext"> Нет аккаунта? <strong className="login-form__subtext_link"><Link to="/">Зарегистрируйтесь</Link></strong> </p>
        </form>
     );
}
 
export default LoginForm;