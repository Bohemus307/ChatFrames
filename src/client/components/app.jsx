import React from 'react';
import io from "socket.io-client";

<<<<<<< HEAD
//const socket = io.connect("http://localhost:5000");
var socket = io.connect();

function App() {
  return (  
    <div>
      <ul id="messages"></ul>
      <form action="">
        <input id="m" autoComplete="off" /><button>Send</button>
      </form>
    </div>
  );
}


=======
class App extends React.Component {
  render() {
    return (
      <div>
        <ul id="messages"></ul>
        <form action="">
          <input id="m" autocomplete="off" /><button>Send</button>
        </form>
      </div>
    );
  }
}

>>>>>>> 2d440b04a23aceaee656a262f6dc9ab960992780
export default App;