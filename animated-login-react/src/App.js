// App.js

import React from 'react';
import './App.scss';
import AuthContainer from './components/auth/AuthContainer';
import './BackgroundAnimation.scss'; // Import the background animation styles

function App() {
  return (
    <div>
      <div className="supermarket-background"></div>
      <AuthContainer />
    </div>
  );
}

export default App;
