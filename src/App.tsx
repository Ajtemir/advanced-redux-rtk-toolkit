import React, {useEffect} from 'react';
import './App.css';
import PostContainer from "./Components/PostContainer";


function App() {
  return (
    <div className="App">
        <div style={{display:'flex'}}>
            <PostContainer/>
            <PostContainer/>
        </div>
    </div>
  );
}

export default App;
