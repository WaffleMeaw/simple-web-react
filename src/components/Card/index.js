import React, { Component } from 'react';
import CardHeader from '../CardHeader';
import CardBody from '../CardBody';
import CardFooter from '../CardFooter';

class Card extends Component {
  render() {
    const { post, user} = this.props

    return (
      <div className='card'>
        <CardHeader title={post.title} />
        <div className='cardSubHeader'>
          <span className='submitted'>
            By: {user.username}
          </span>
        </div>
        <CardBody content={post.body} />
        <CardFooter />
      </div>
    );
  }
}

export default Card;