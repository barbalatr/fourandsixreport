import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      React.createElement('div',null , 'cha cu')
    )
  }
}

ReactDOM.render(React.createelement(App), document.getElementById('root'));
