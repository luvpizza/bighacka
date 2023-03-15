import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import CreateTaskForm from "./CreateTaskForm/CreateTaskForm";
import TasksContainer from "./TasksContainer/TasksContainer";
import "./UserPage.scss"
const UserPage = () => {

    // фейк дата, инфа будет приходить с запроса по токену
    const userData = {
        firstName: "Urmat",
        lastName: "Kokonbaev",
        // таски можно хранить как массив id. при запросе на каждый таск нужно
        // сравнивать id запрашивающего и id автора таска.

        tasks: [
            {
                id: 1,
                title: "уборка",
                description: "убраться в хатеубраться в хатеубраться в хатеубраться в хатеубраться в хатеубрат" +
                        "ься в хатеубраться в хатеубраться в хатеубраться в хатеубраться в хатеубраться в" +
                        " хатеубраться в хатеубраться в хатеубраться в хатеубраться в хатеубраться в хате",
                difficulty: 2
            }, {
                id: 2,
                title: "уборка",
                description: "убраться в хате",
                difficulty: 1
            }, {
                id: 3,
                title: "уборка",
                description: "убраться в хате",
                difficulty: 3
            }, {
                id: 1,
                title: "уборка",
                description: "убраться в хатеубраться в хатеубраться в хатеубраться в хатеубраться в хатеубрат" +
                        "ься в хатеубраться в хатеубраться в хатеубраться в хатеубраться в хатеубраться в" +
                        " хатеубраться в хатеубраться в хатеубраться в хатеубраться в хатеубраться в хате",
                difficulty: 2
            }, {
                id: 2,
                title: "уборка",
                description: "убраться в хате",
                difficulty: 1
            }, {
                id: 3,
                title: "уборка",
                description: "убраться в хате",
                difficulty: 3
            }
        ],
        
        
        role: "user"
    }

    return (
        <div>
            <Header/>
            <div className="main">
                <div className="user__container">

                    <div className="user__top">
                        <CreateTaskForm/>
                        <TasksContainer taskList={userData.tasks}/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UserPage;