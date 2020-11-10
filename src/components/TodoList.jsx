import React, {useState, useCallback} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { getItemsFroLocalStoreage, saveTodoItemsToLocalStorage} from '../helpers'

export default function TodoList() {
    const [todos, setTodos] = useState(getItemsFroLocalStoreage('todo') || [])

    const addTodo = useCallback(todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos)
        saveTodoItemsToLocalStorage('todo', newTodos)
    }, [todos])


    
    const updateTodo = useCallback((todoId, todo) => {
        const newTodo = [...todos].map(item => (item.id === todoId ? todo : item))
        setTodos(newTodo)


        saveTodoItemsToLocalStorage('todo', newTodo)
    }, [todos])



    const removeTodo = useCallback(id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
        saveTodoItemsToLocalStorage('todo', removeArr)
    }, [todos])
    

    const completeTodo = useCallback(id => {
        let update = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        setTodos(update)
        saveTodoItemsToLocalStorage('todo', todos)
    }, [todos])

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
