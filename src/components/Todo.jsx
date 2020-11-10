import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { MdRemoveCircleOutline } from 'react-icons/md'
import { MdModeEdit } from 'react-icons/md'
const Todo = ({todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState ({
        id: null,
        value: ''
    })

    const subUpdate = text => {
        updateTodo(edit.id, text)

        setEdit({
            id: null,
            text: ''
        })
    }
    
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={subUpdate} />
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo.row complete' : 'todo-row'}
            key={index} 
        >
        <div key={index} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>

        <div className='icons'>
            <MdRemoveCircleOutline
            onClick={() => removeTodo(todo.id)} 
            className='delete-icon'/>
        
            <MdModeEdit
                onClick={() => setEdit({ id: todo.id, text: todo.text})} 
                className='edit-icon'/>
            </div>
        </div>
    ))
}

export default Todo

