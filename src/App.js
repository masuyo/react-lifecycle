import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import PageContent from './components/page-content';


class App extends Component {
  render() {
    return (
      <div>
        <h1>DevCamp React Starter</h1>
        <Navigation />
        <PageContent />
      </div>
    );
  }
}

export default App;
