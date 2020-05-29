import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import "./App.css";

import Table from "./views/Table";
import Layout from "./views/Layout";

function App() {
  return (
    <>
      <div className="App">
        <DndProvider backend={Backend}>
          <Layout />
          <Table zoom={1} />
        </DndProvider>
      </div>
    </>
  );
}

export default App;
