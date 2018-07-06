import React, { Component } from 'react'
import classes from './Hero.css'
import NavBar from '../NavBar/NavBar'
import profileImg from '../../mriddle.jpg'

class Hero extends Component {
  render () {
    return (
      <section
        color={this.props}
        className={`hero ${this.props.color} is-fullheight`}
      >
        <div className='hero-head' />
        <div className='hero-body'>
          <div className={`container ${classes.Flex}`}>
            <div className={classes.RowOne}>
              <figure className={`image is-128x128 ${classes.Image}`}>
                <img className={`${classes.Image}`} src={profileImg} />
              </figure>
              <h1 largetext={this.props} className='title'>
                {this.props.largetext}
              </h1>
            </div>
            <h2 subtext={this.props} className='subtitle'>
              {this.props.subtext}
            </h2>

          </div>

        </div>
        <div className='hero-foot' />
      </section>
    )
  }
}

export default Hero
