import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './todo.module.css'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className={classes.todo} >
            <p className={`${task.completed ? classes.completed : classes.incompleted}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon 
                    className="edit-icon" 
                    style={{marginRight: "10px", cursor: 'pointer'}} 
                    icon={faPenToSquare} 
                    onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon 
                    className="delete-icon" 
                    icon={faTrash} 
                    style={{cursor: 'pointer'}}
                    onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    );
}

export default Todo;
