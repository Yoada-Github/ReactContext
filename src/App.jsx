import React from 'react';
import Component1 from './Component1'; // Import Component1 which includes Component2
import './index.css';

function App() {
  return (
    <>
      {/* Render Component1 which will also render Component2 */}
      <Component1 />
    </>
  );
}

export default App;
