
import React from 'react';
import './App.css';
import routes from './routes';
// import Header from '../src/components/Header/Header';
import Web from './components/Web/Web'


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      { routes }
      {<Web />}
    </div>
  );
}

export default App;
