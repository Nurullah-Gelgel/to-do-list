import React from 'react';
import {useToDo} from '../Context/ToDoContext';

let filtered = null
function Contents(props) {

    const {todos, setTodos, toggleToDo, onDelete, filter} = useToDo()
    filtered = todos;
    if (filter !=="all"){
        filtered = todos.filter((todo)=>
        filter==="active"
            ? todo.completed ===false
            : todo.completed ===true
        )
    }

    const onChange = (id) => {
        toggleToDo(id)
    }

    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">{
                    filtered.map(todo => (
                        <li className={todo.completed ? "completed" : ""}>
                            <div className="view">
                                <input className="toggle"
                                       type="checkbox"
                                       checked={todo.completed}
                                       onChange={() => onChange(todo.id)}
                                />
                                <label>{todo.text}</label>
                                <button className="destroy" onClick={() => onDelete(todo.id)}></button>
                            </div>
                        </li>
                    ))
                }</ul>
            </section>

        </div>
    );
}

export default Contents;