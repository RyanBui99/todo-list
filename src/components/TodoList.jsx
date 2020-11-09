import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const updateTodo = (todoId, newVal) => {
        if (!newVal.text || /^\s*$/.test(newVal.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newVal : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const completeTodo = id => {
        let update = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updateTodo)
    }

    return (
        <div className='container'>
            <h1>What is your way to GLORY?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    )
}
