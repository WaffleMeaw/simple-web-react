import React, { Component } from 'react';
import Card from '../Card';

class CardList extends Component {
  render() {
    const { posts } = this.props

    return (
      <div className='cardList'>
        {
          posts.map((value,index) => (
            <Card key={value.id} title={value.title} content={value.body}/>
          ))
        }
      </div>
    );
  }
}

export default CardList;