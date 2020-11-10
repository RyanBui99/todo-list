import React, {useState, useEffect, useRef} from 'react'

export default function TodoForm(props) {
    //Hook
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100),
            text: input
        })
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <div>
                    <input 
                    placeholder='Update'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input edit'
                    autoComplete='off'
                    />

                    <button onClick={handleSubmit} className='todo-button edit'>
                        update
                    </button>
                </div>
            ) : (
                <div className='add-items-container'>
                    <input
                    placeholder='Add Task'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input'
                    autoComplete='off'
                    />
                    <button onClick={handleSubmit} className='todo-button'>
                        Add
                    </button>
                </div>
            )}
        </form>
    )
}
