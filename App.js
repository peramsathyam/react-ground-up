import React from 'react';

/* 1. Stateful class Component */
// class App extends React.Component {
//   render() {
//     // return <div>Jai is my sweety</div> or (el, probs, innerHTML)
//     return React.createElement('h1', null, 'Jai is my sweety') //jsx => js
//   }
// }

/* 2. Stateless function Component */
// const App = () => <h1>Hello Jai kutty! I love you </h1>

/* 3. Bit advanced Component */
class App extends React.Component {
  render() {
    return ( // if div start in this line then brackets not needed
      <div>
        <h1>My dear jai</h1>
        <b>You are my soul</b>
      </div>
    ); // semi-colon not needed
  }
}

export default App
