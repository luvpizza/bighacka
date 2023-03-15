import Task from "../Task/Task";
import "./TasksContainer.scss"

const TasksContainer = ({taskList}) => {

    console.log(taskList);

    return (
        <div className="task-list__container">

            <h1 className="task-list__title">Последние задачи</h1>

            {taskList.slice(0,3).map(item =>< Task id = {
                item.id
            }
            title = {
                item.title
            }
            difficulty = {
                item.difficulty
            }
            description = {
                item.description
            } />)}

        </div>
    )
}

export default TasksContainer;