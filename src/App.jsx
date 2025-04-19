import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import { store } from "./redux/store";
import TodoList from './components/TodoList';
function App() {
  return (
    <>
      <Provider store={store}>
        <div className="min-h-screen bg-gray-100 py-10">
          <Counter />
          <TodoList />
        </div>
      </Provider>
    </>
  );
}

export default App;
