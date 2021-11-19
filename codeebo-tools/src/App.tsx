import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Row from "./components/grid/row";
import Col from "./components/grid/col";
import Grid from "./components/grid/grid";

function App() {
  return (
    <div className="App">
      <Grid>
        <Row debug>
          <Col size={[3, 4, 6, 12]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum temporibus odio quibusdam repudiandae at modi obcaecati eius quia amet tenetur accusantium iste corporis, maiores non exercitationem ratione asperiores rem ab.</Col>
          <Col size={[3, 4, 6, 12]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum temporibus odio quibusdam repudiandae at modi obcaecati eius quia amet tenetur accusantium iste corporis, maiores non exercitationem ratione asperiores rem ab.</Col>
          <Col size={[3, 4, 6, 12]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum temporibus odio quibusdam repudiandae at modi obcaecati eius quia amet tenetur accusantium iste corporis, maiores non exercitationem ratione asperiores rem ab.</Col>
          <Col size={[3, 4, 6, 12]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum temporibus odio quibusdam repudiandae at modi obcaecati eius quia amet tenetur accusantium iste corporis, maiores non exercitationem ratione asperiores rem ab.</Col>
        </Row>
      </Grid>
      
      <br />
      <br />
      <br />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>
          <span>, </span>
          <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </a>
          <span>, </span>
          <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
