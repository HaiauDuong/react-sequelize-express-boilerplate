import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'

// const socket = io(window.location.origin);

// socket.on('connect', function () {
//     console.log('I have made a persistent two-way connection to the server!');
// });

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
