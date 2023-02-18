import React from 'react';
import {useToDo} from '../Context/ToDoContext';

function Footer(props) {
	const {todos, setTodos, filter, setFilter} = useToDo()
	const clearCompleted = () => {
		const cloned_todos = [...todos]
		const new_todos = cloned_todos.filter((todo) => !todo.completed)
		setTodos(new_todos)
	}

  return (<div>

	<footer class="footer">
		<span class="todo-count">
			<strong>{todos.length} </strong>
			item{todos.length>1 && 's'} left
		</span>

		<ul class="filters">
			<li>
				<a href="#/" onClick={()=>setFilter('all')} className={filter==='all' ? "selected" : "" }>All</a>
			</li>
			<li>
				<a href="#/" onClick={()=>setFilter('active')} className={filter==='active' ? "selected" : "" } >Active</a>
			</li>
			<li>
				<a href="#/" onClick={()=>setFilter('completed')} className={filter==='completed' ? "selected" : "" } >Completed</a>
			</li>
		</ul>

		<button class="clear-completed" onClick={clearCompleted}>
			Clear completed
		</button>
	</footer>



  </div>);
}

export default Footer;
