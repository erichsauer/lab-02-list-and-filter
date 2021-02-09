import React from 'react';
import './App.css';
import Header from './Header/Header';
import hornedCreatures from './data.js'
import ImageList from './ImageList/ImageList';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageList hornedCreatures={hornedCreatures}/>
      </div>
    )
  }
}
