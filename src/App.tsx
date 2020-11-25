import React from 'react';
import './App.css';
import AppContext from './AppContext';
import AppRedux from './AppRedux';


function App() {
  console.log('App');

  return (
    <div className="App">
      <h1>Context</h1>
      <AppContext />
      <h1>Redux</h1>
      <AppRedux />
    </div>
  );
}

export default App;
