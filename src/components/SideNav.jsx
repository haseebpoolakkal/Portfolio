import React from 'react'
import NavItem from './NavItem'

const SideNav = () => {
  return (
    <div className='h-screen flex flex-col justify-center'>
        <NavItem id="profile" name="Profile" />
        <NavItem id="services" name="Services" />
        <NavItem id="works" name="Works" />
        <NavItem id="skills" name="Skills" />
        <NavItem id="contact" name="Contacts" />
    </div>
  )
}

export default SideNav