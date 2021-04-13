import React from 'react';
import './App.css';
import Lifecycle from './components/Lifecycle';


function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <Lifecycle prop_value='FromApp.js'></Lifecycle>
    </div>
  );
}

export default App;
