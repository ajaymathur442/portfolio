import React from 'react';

import logo from './logo.svg';
import './App.scss';
import Main from './components/main/Main';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      {/* <div className="animations">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> */}
      <script src="https://kit.fontawesome.com/yourcode.js"></script>
      <div className="content">
        <Main/>
        {/* <Card /> */}
      </div>
      
    </div>
  );
}

export default App;
