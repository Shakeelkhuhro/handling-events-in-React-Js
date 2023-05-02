import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Click the button to change me!');

  const handleClick = () => {
    alert("Button change to Hello, world!");
    setMessage('Hello, world!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
