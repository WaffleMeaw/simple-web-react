import React, { Component } from 'react'
import NavbarList from '../NavbarList';

const menuArray = [
  {
    title: 'Item 1',
    href: '#',
  }, {
    title: 'Item 2',
    href: '#',
  }, {
    title: 'Item 3',
    href: '#',
  }, {
    title: 'Item 4',
    href: '#',
  },
]

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <NavbarList menuArray={menuArray} />
      </div>
    )
  }
}

export default Navbar
