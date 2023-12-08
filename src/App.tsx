import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./store/hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {log} from "util";

function App() {
    const {count} = useAppSelector(state => state.userReducer)
    const {increment} = userSlice.actions;
    const dispatch = useAppDispatch()
    console.log(increment(5))
  return (
    <div className="App">
      <h1>{count}</h1>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
    </div>
  );
}

export default App;
