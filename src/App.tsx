import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Table from "./components/Table";
import GlobalStyle from "Styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <Table />
      </header>
    </div>
  );
}

export default App;
