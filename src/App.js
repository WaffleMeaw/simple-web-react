import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar';
import Body from './components/Body'
import Users from './containers/Users'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='appRoot'>
          <Header />
          <Navbar />
          <Route exact path="/" component={Body} />
          <Route path="/users" component={Users}/>
        </div>
      </Router>
    )
  }
}

export default App
