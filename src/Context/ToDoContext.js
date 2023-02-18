import {createContext, useContext, useState} from 'react';
import {v4 as uuid4} from "uuid";

const Context = createContext({});

export const ToDoProvider = ({children}) => {
    const [filter, setFilter] = useState("all")
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Learn React",
            completed: false,
        },
        {
            id: 2,
            text: "Learn Java",
            completed: false,
        },
    ])


    const addToDO = (text) => setTodos((prev) => [
        ...prev, {id: uuid4(), text, completed: false}])

    const toggleToDo = (id) => {
        const cloned_todos = [...todos]
        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id)

        const item = todos[itemIndex]
        item.completed = !item.completed
        setTodos(cloned_todos)
    }
    const onDelete = (id) => {
        const cloned_todos = [...todos]
        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id)
        cloned_todos.splice(itemIndex, 1)
        setTodos(cloned_todos)
    }


    const values = {
        todos,
        setTodos,
        addToDO,
        toggleToDo,
        onDelete,
        filter,
        setFilter
    }
    return <Context.Provider value={values}>{children} </Context.Provider>
}

export const useToDo = () => {
    const ToContext = useContext(Context)

    if (ToContext === undefined) {
        throw new Error('To Do okunmadı')
    }
    return ToContext
}