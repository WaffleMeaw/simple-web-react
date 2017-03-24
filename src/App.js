import React, { Component } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar';
import Body from './components/Body'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='appRoot'>
        <Header />
        <Navbar />
        <Body />
      </div>
    )
  }
}

export default App
