import React from 'react';
import './App.css';
import Header from './Header/Header';
import Form from './Form/Form';
import ImageList from './ImageList/ImageList'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    )
  }
}
