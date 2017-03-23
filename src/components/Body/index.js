import React, { Component } from 'react'

class Body extends Component {
  render() {
    return (
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
    )
  }
}

export default Body