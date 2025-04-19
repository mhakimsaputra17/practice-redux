import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: '1', text: 'Belajar Redux Toolkit', completed: false },
    { id: '2', text: 'Belajar React', completed: true },
  ],
  filter: 'all', // 'all', 'completed', 'active'
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Menambah todo baru
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      // prepare callback memungkinkan kita menyiapkan payload sebelum dikirim ke reducer
      prepare: (text) => {
        const id = nanoid();
        return { payload: { id, text, completed: false } };
      },
    },
    // Menghapus todo berdasarkan id
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    // Toggle status completed dari todo
    toggleComplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // Edit text todo berdasarkan id
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    // Mengubah filter
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, editTodo, setFilter } = todosSlice.actions;

// Selector untuk mendapatkan filtered todos
export const selectFilteredTodos = (state) => {
  switch(state.todos.filter) {
    case 'completed':
      return state.todos.todos.filter(todo => todo.completed);
    case 'active':
      return state.todos.todos.filter(todo => !todo.completed);
    default:
      return state.todos.todos;
  }
};

export default todosSlice.reducer;