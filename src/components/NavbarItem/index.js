import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavbarItem extends Component {
  render() {
    const { title, href } = this.props

    return (
      <li className='navbarItem'>
        <Link to={href} className='navbarLink'>{title}</Link>
      </li>
    )
  }
}

export default NavbarItem
