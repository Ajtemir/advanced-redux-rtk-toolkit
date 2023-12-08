import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./store/hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {log} from "util";

function App() {
    const dispatch = useAppDispatch()
  return (
    <div className="App">
    </div>
  );
}

export default App;
