import React from 'react';
import './App.css';
import Header from './Header/Header';
import Form from './Form/Form';


export default class App extends React.Component {
  state = {
    keyword: '',
    horns: ''
  }
  
    handleKeyword = (e) => {
      this.setState({ keyword: e.target.value })
      }

    handleHorns = (e) => {
      this.setState({ horns: e.target.value })
    }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Form state={this.state} handleKeyword={this.handleKeyword} handleHorns={this.handleHorns} />
      </div>
    )
  }
}
