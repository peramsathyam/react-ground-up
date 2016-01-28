import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let txt = this.props.txt // outside we don't need text, hence avoid `var`
    return <h1>{txt} and cat value is {this.props.cat}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default txt'
}


/* Hack-hint: render(<el attr="">, querySelector); el:=tag, attr:=props */
ReactDOM.render(
  <App cat={14} />,
  document.getElementById('app')
);
