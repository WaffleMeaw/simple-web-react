import React, { Component } from 'react';
import $ from 'jquery'
import CardList from '../CardList';

class MainContent extends Component {

  state = {
    posts: [],
    users: [],
  }

  fetchPostData = () => {
    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
      url: root + '/posts',
      method: 'GET'
    }).then((data) => {
      this.setState({ posts: data})
    }).catch((error) => console.log)
  }

  fetchUserData = () => {
    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
      url: root + '/users',
      method: 'GET'
    }).then((data) => {
      this.setState({ users: data})
    }).catch((error) => console.log)
  }

  componentDidMount() {
    this.fetchPostData()
    this.fetchUserData()
  }

  render() {
    const { posts, users } = this.state
    return (

      <div className='mainContent'>
        <CardList posts={posts} users={users} />
      </div>
    );
  }
}

export default MainContent;