import React, { Component } from 'react';
import MainContent from '../MainContent';
import SideContent from '../SideContent';

class BodyContent extends Component {
  render() {
    return (
      <div className='bodyContent'>
          <MainContent />
          <SideContent />
      </div>
    );
  }
}

export default BodyContent;