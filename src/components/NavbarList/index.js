import React, { Component } from 'react';
import NavbarItem from '../NavbarItem'

class NavbarList extends Component {
  render() {
    const { menuArray } = this.props

    return (
      <ul className='navbarList'>
        {
          menuArray.map((value, index) => (
            <NavbarItem key={index} title={value.title} href={value.href} />
          ))
        }
      </ul>
    );
  }
}

export default NavbarList;