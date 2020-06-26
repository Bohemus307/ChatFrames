import React from 'react';
import io from "socket.io-client";

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


export default App;