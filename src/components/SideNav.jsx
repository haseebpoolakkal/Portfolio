import React from 'react'
import NavItem from './NavItem'

const SideNav = () => {
  return (
    <div className='h-screen flex flex-col justify-center'>
        <NavItem id="profile" />
        <NavItem id="services" />
        <NavItem id="works" />
        <NavItem id="skills" />
        <NavItem id="contact" />
    </div>
  )
}

export default SideNav