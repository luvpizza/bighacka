import { Route,Routes,BrowserRoutes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";


const CurrentPage = () => {
    return ( 
        <div className="current__page">
            <Routes>
                <Route exact path="/" element={<RegisterPage/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
           </Routes>
        </div>
     );
}
 
export default CurrentPage;