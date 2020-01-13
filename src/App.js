import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import routes from "./routes";
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
      {routes}
    </div>
  );
}

export default App;
