import React, { Component } from 'react'
import classes from './NavBar.css'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <nav className={`navbar is-fixed-top is-dark ${classes.Backdrop}`}>
        <div className='container'>
          <NavLink to='/home'>
            <Button
              icon='fab fa-fort-awesome js-trigger-transition'
              text='Home'
            />
          </NavLink>
          <NavLink to='/about'>
            <Button icon='fas fa-user-circle' text='About me' />
          </NavLink>
          <NavLink to='/mywork'>
            <Button icon='fas fa-briefcase' text='My work' />
          </NavLink>
        </div>
      </nav>
    )
  }
}

export default NavBar
