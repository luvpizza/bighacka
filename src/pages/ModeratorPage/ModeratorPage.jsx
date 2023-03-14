import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import PoolReport from "./PoolReport/PoolReport.jsx";
import "./ModeratorPage.scss"


const ModeratorPage = () => {
    
    // фейк дата
    const data = [{id:1, title: "Уборка", date: "010101", status: 2},{id:1, title: "Очисткалуйцдулдцуц йубйц ", date: "010101", status: 2},{id:1, title: "Мытьё", date: "010101", status: 1}]
    const moddata = {name: "Ali"}


        return ( 
            <div>                
                <Header/>

                <div className="main">

                    <div className="moderator__container">
                    
                        <div className="moderator__card">
                            <h1 className="moderator__name">{moddata.name}</h1>
                            <p className="moderator__role">модератор</p>
                        </div>
                    
                        
                        <h1 className="reports__text">Последние отчеты</h1>

                        <div className="reports__container">
                            {data.map(({id,title,date,status})=><PoolReport id={id} title={title} date={date} status={status} />)}
                        </div>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

 
export default ModeratorPage;