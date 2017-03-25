import React, { Component } from 'react';
// import ImageContent from '../ImageContent';
// import Content from '../Content';

class CardBody extends Component {
  render() {
    const { content } = this.props

    return (
      <div className='cardBody'>
        <span className='imageContent'>
          Image
        </span>
        <span className='content'>
          <div>
            {content}
          </div>
        </span>
      </div>
    );
  }
}

export default CardBody;