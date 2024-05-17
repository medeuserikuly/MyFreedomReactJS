import { useState } from 'react';
import classes from '../TodoForm/todoFrom.module.css'
import toast from 'react-hot-toast';

const EditTodoFrom = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value) {
            editTodo(value, task.id)
        } else {
            toast.error("Пустая задача не принимается")
        }
        
        setValue('')
    }
    return (
        <form className={classes.todoFrom} onSubmit={handleSubmit}>
            <input 
                type="text" 
                className={classes.todoInput} 
                placeholder='Изменить задачу'
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className={classes.todoBtn}>Изменить задачу</button>
        </form>   
);
}

export default EditTodoFrom;
