import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTodos, setFilter } from '../redux/slices/todosSlice';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

function TodoList() {
  const todos = useSelector(selectFilteredTodos);
  const filter = useSelector(state => state.todos.filter);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Redux Todo List</h1>
      
      <AddTodoForm />
      
      <div className="flex justify-center space-x-2 mb-4">
        <button
          onClick={() => dispatch(setFilter('all'))}
          className={`px-3 py-1 text-sm rounded ${
            filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter('active'))}
          className={`px-3 py-1 text-sm rounded ${
            filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          className={`px-3 py-1 text-sm rounded ${
            filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Completed
        </button>
      </div>
      
      <ul className="border rounded-md divide-y">
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <li className="p-4 text-gray-500 text-center">No todos found</li>
        )}
      </ul>
      
      <div className="mt-4 text-sm text-gray-500 text-center">
        {todos.length} items shown
      </div>
    </div>
  );
}

export default TodoList;