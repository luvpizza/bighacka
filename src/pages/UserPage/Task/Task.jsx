import "./Task.scss"

const Task = ({id, title, difficulty, description}) => {
    
    const checkDifficulty = (difficulty) => {
        if (Number(difficulty) === 1) {
            return (
                <div className="difficulty-easy">Легкий</div>
            )
        } else if (Number(difficulty) === 2) {
            return (
                <div className="difficulty-normal">Средний</div>
            )
        } else if (Number(difficulty) === 3){
            return <div className="difficulty-high">Сложный</div>
        }
    }


    return ( 
        <div className="new-task" data-id={id}>
            <div className="new-task__data">
                <h1 className="new-task__title">{title}</h1>
                <h1 className="new-task__description">{description}</h1>
            </div>
            {checkDifficulty(difficulty)}
        </div>
     );
}
 
export default Task;