import React, { Component } from 'react'

class NavbarItem extends Component {
  render() {
    const { title, href } = this.props

    return (
      <li className='navbarItem'>
        <a href={href}>{title}</a>
      </li>
    )
  }
}

export default NavbarItem
