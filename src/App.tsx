import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div styleName="app">
      <header styleName="appHeader">
        <img src={logo} styleName="appLogo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          styleName="appLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
