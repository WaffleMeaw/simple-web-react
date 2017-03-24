import React, { Component } from 'react';
import ImageContent from '../ImageContent';
import Content from '../Content';

class CardBody extends Component {
  render() {
    const { content } = this.props

    return (
      <div className='cardBody'>
        {/*<ImageContent />*/}
        <Content content={content} />
      </div>
    );
  }
}

export default CardBody;