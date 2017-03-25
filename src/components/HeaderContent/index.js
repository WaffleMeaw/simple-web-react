import React, { Component } from 'react'
import Logo from '../Logo';
import AdBanner from '../AdBanner';

class HeaderContent extends Component {
  render() {
    return (
      <div className='headerContent'>
        <Logo />
        <AdBanner />
      </div>
    ) 
  }
}

export default HeaderContent