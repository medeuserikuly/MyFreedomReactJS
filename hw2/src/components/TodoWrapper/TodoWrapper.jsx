import { useState } from "react";
import TodoFrom from "../TodoForm/TodoFrom";
import classes from './todoWrapper.module.css'
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/Todo";
import EditTodoFrom from "../EditTodoFrom/EditTodoForm";
uuidv4()

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([
            ...todos, 
            { id: uuidv4(), task: todo, completed: false, isEditing: false }
        ])
        
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo));
    }

    return (
        <div className={classes.todoWrapper}>
            <h1>ToDo List</h1>
            <TodoFrom addTodo={addTodo}/>

            {todos.map((todo) => 
                todo.isEditing ? (
                    <EditTodoFrom editTodo={editTask} task={todo}/>
                ) : (
                    <Todo 
                        key={todo.id} 
                        task={todo} 
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}/>
                )
            )}
        </div>
    )
}

export default TodoWrapper;
