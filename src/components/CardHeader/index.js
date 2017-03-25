import React, { Component } from 'react';
import Title from '../Title';

class CardHeader extends Component {
  render() {
    const { title } = this.props
    
    return (
      <div className='cardHeader'>
        <Title title={title} />
      </div>
    );
  }
}

export default CardHeader;