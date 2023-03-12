import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import CurrentPage from "./pages/CurrentPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter> 
        <CurrentPage/>
    </BrowserRouter>

  );
}

export default App;
