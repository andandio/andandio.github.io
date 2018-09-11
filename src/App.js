import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">
            ANDERS HOWERTON
          </h1>
        </header>
        <Skills/>
      </div>
    );
  }
}

function Skills() {
  return (
    <div className="skills-container">
      <table>
        <tbody>
          <tr>
           <td><span className="skill"><a href="">CODE</a></span></td>
           <td><span className="skill">RESUME</span></td>
          </tr>
          <tr>
            <td><span className="skill">WRITING</span></td>
            <td><span className="skill">PODCAST PRODUCTION</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
