import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let txt = this.props.txt // outside we don't need text, hence avoid `var`
    return <h1>{txt}</h1>
  }
}



/* Hack-hint: render(<el attr="">, querySelector); el:=tag, attr:=props */
ReactDOM.render(
  <App txt="This is example probs" />,
  document.getElementById('app')
);
