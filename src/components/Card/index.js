import React, { Component } from 'react';
import CardHeader from '../CardHeader';
import CardBody from '../CardBody';
// import CardFooter from '../CardFooter';

class Card extends Component {
  render() {
    const { title, content } = this.props

    return (
      <div className='card'>
        <CardHeader title={title} />
        <CardBody content={content} />
        {/*<CardFooter />*/}
      </div>
    );
  }
}

export default Card;