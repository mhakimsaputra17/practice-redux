import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="min-h-screen bg-gray-100 py-10">
          <Counter />
        </div>
      </Provider>
    </>
  );
}

export default App;
