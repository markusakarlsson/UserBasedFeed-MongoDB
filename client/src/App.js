import React from 'react';
import './App.css';
import './components/PostFeed';
import PostFeed from './components/PostFeed';
import './components/UserPage';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className="App">
      <header>
        <h1>POST FEED APP</h1>
      </header>
      <div style={{display: "flex", flexDirection: "row"}}>
      <PostFeed/>
      <UserPage/>
      </div>
    </div>
  );
}

export default App;
