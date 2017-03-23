import React, { Component } from 'react'
import SubHeaderContent from '../SubHeaderContent'
import Navbar from '../Navbar'

class HeaderContent extends Component {
  render() {
    return (
      <div className='headerContent'>
        <SubHeaderContent />
        <Navbar />
      </div>
    )
  }
}

export default HeaderContent