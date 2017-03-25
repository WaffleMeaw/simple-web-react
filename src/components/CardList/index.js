import React, { Component } from 'react';
import Card from '../Card';

class CardList extends Component {
  render() {
    const { posts, users } = this.props

    return (
      <div className='cardList'>
        {
          posts.map((post, indexPost) => {
            return (
              users.map((user, indexUser) => {
                if (post.userId === user.id) {
                  return <Card key={post.id} post={post} user={user} />
                }
              })
            )
          })
        }
      </div>
    );
  }
}

export default CardList;