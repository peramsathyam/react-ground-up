import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: 'this is the state txt'}
  }
  render() {
    return <h1>state value : {this.state.txt}</h1>
  }
}

/* Hack-hint: render(<el attr="">, querySelector); el:=tag, attr:=props */
ReactDOM.render(
  <App cat={14} />, // props are static values or methods unlike states
  document.getElementById('app')
);
