import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import "./App.css";

import Table from "./components/Table";
import GlobalStyle from "Styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <DndProvider backend={Backend}>
          <Table />
        </DndProvider>
      </header>
    </div>
  );
}

export default App;
