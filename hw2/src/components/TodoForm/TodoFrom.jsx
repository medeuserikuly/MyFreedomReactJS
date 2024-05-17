import { useState } from 'react';
import classes from './todoFrom.module.css'
import toast from 'react-hot-toast';

const TodoFrom = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value) {
            addTodo(value)
        } else {
            toast.error("Введите задачу")
        }
        
        setValue('')
    }
    return (
        <form className={classes.todoFrom} onSubmit={handleSubmit}>
            <input 
                type="text" 
                className={classes.todoInput} 
                placeholder='Введите задачу'
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className={classes.todoBtn}>Добавить задачу</button>
        </form>   
);
}

export default TodoFrom;
