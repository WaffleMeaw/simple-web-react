import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { title } = this.props

    return (
      <span className='title'>
        {title}
      </span>
    );
  }
}

export default Title;