import React from 'react';
import './App.css';

import FriendList from './components/FriendList';

//stateless component loading a stateful component
function App () {
  return (
    <div className="app">
      <FriendFrom />
      <FriendList />
    </div>
  );
}

export default App;
