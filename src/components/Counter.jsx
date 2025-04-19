import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../redux/slices/counterSlice";

function Counter() {
  //  Mengambil state dari redux store
  const count = useSelector((state) => state.counter.value);
  //  Dispatcher untuk mengirim actions ke store
  const dispatch = useDispatch();
  // state lokal untuk input amount
  const [amount, setAmount] = useState(2);

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Redux Counter
        </h1>

        <div className="text-center p-4 bg-gray-100 rounded-lg mb-4">
          <span className="text-4xl font-bold text-blue-600">{count}</span>
        </div>

        <div className="flex justify-center space-x-3 mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
            className="border rounded-md px-2 py-1 w-16 text-center"
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            onClick={() => dispatch(incrementByAmount(amount))}
          >
            Add Amount
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
