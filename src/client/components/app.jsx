import React from 'react';
import io from 'socket.io-client';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endpoint: 'localhost;3030',
      color: 'white',
    };
    this.send = this.send.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  componentDidMount() {
    const socket = io(this.state.endpoint);
    setInterval(this.send(), 1000);
    socket.on('change color', (col) => {
      document.body.style.backgroundColor = col;
    });
  }

  setColor(color) {
    this.setState({ color });
  }

  send() {
    const socket = io(this.state.endpoint);
    socket.emit('change color', this.state.color);
  }

  render() {
    const socket = io(this.state.endpoint);

    return (
      <div style={{ textAlign: "center" }}>
        <button type="button" onClick={() => this.send()}>Change Color</button>
        <button type="button" id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button type="button" id="red" onClick={() => this.setColor('red')}>Red</button>
      </div>
    );
  }
}

export default App;
