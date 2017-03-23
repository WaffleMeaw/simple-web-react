import React, { Component } from 'react';
import ContentMain from './containers/Content'
import './App.css';

class App extends Component {
  render() {
    return (

      <div className='appRoot'>

        <div className='header'>
          <div className='headerContent'>
            <div className='subHeaderContent'>
              <div className='logo'>
                Logo
              </div>
              <div className='adBanner'>
                AdBanners
              </div>
            </div>
            <div className='navbar'>
              <div className='navbarItem'>
                NavbarItems...
              </div>
            </div>
          </div>
        </div>

        <div className='body'>
          <div className='bodyContent'>
            <div className='mainContent'>
              <div className='cardList'>
                <div className='card'>
                  Card...
                </div>
              </div>
            </div>
            <div className='sideContent'>
              SideContent
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App

