import React from "react";
import Articles from "./components/Articles";
import User from "./components/User";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeleton</h1>
      </header>
      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}
