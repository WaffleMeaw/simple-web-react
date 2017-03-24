import React, { Component } from 'react';
import $ from 'jquery'
import CardList from '../CardList';

class MainContent extends Component {

  state = {
    posts: []
  }

  fetchData = () => {
    var root = 'https://jsonplaceholder.typicode.com';

    $.ajax({
      url: root + '/posts',
      method: 'GET'
    }).then((data) => {
      this.setState({ posts: data})
    }).catch((error) => console.log)
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { posts } = this.state
    return (
      <div className='mainContent'>
        <CardList posts={posts} />
      </div>
    );
  }
}

export default MainContent;