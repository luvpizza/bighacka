import Button from "../../../components/Inputs/Button/Button";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
import "./CreateTaskForm.scss"

const CreateTaskForm = (userId) => {

    const addTask = (userId) => {
        // запрос на создание таска по id юзера
    }

    return ( 
        <div>
            <form className="create-task__form">
                <h1 className="form__title">Создать задачу</h1>
                <TextInput placeholder={"Наименование задачи"} className="task__title"></TextInput>
                <TextInput placeholder={"Наименование задачи"} className="task__title"></TextInput>
                {/* тут ^^^ должен быть выпадающий список со сложностью задачи*/}
                <textarea className="task__description" placeholder="Описание задачи"></textarea>
                <Button text={"Создать задачу"} className="task__create-btn"></Button>
            </form>
        </div>
     );
}
 
export default CreateTaskForm;