import React, { Component } from 'react'

class Button extends Component {
  render () {
    return (
      <div className='navbar-item'>
        <a className='button is-dark hvr-underline-from-left'>
          <span className='icon'>
            <i icon={this.props} className={this.props.icon} />
          </span>
          <span text={this.props}>{this.props.text}</span>
        </a>
      </div>
    )
  }
}

export default Button
