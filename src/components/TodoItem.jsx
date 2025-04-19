import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete, editTodo } from '../redux/slices/todosSlice';

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editText.trim() !== todo.text) {
      dispatch(editTodo({ id: todo.id, text: editText }));
    }
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-3 border-b last:border-b-0">
      <div className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleComplete(todo.id))}
          className="mr-3 h-5 w-5 text-blue-500"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
            onBlur={handleEdit}
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
          />
        ) : (
          <span
            className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
            onClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
        )}
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-2 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;