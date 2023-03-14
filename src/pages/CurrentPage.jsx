import { Route,Routes,BrowserRoutes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import ModeratorPage from "./ModeratorPage/ModeratorPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import UserPage from "./UserPage/UserPage";


const CurrentPage = () => {
    return ( 
        <div className="current__page">
            <Routes>
                <Route exact path="/" element={<RegisterPage/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/profile" element={<UserPage/>}/>
                <Route exact path="/moderator" element={<ModeratorPage/>}/>
           </Routes>
        </div>
     );
}

export default CurrentPage;