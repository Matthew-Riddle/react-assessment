import React, { Component } from 'react'
import classes from './App.css'
import Hero from './components/Hero/Hero'
import ScrollMagic from './ScrollMagic'
import { TimelineMax, Linear } from 'gsap'
import { jquery as $ } from 'jquery'
import About from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import MyWork from './components/MyWork/MyWork'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount () {
    const controller = new ScrollMagic.Controller()

//     const wipeAnimation = new TimelineMax()
//       .fromTo(
//         `section.${classes.Panel}.${classes.Next}`,
//         1,
//         { y: '-100%' },
//         { y: '0%', ease: Linear.easeNone }
//       )
//       .fromTo(
//         `section.${classes.Panel}.${classes.NextAgain}`,
//         1,
//         { y: '-100%' },
//         { y: '0%', ease: Linear.easeNone }
//       )

//     new ScrollMagic.Scene({
//       triggerElement: '#PinContainer',
//       triggerHook: 'onLeave',
//       duration: '300%'
//     })
//       .setPin('#PinContainer')
//       .setTween(wipeAnimation)
//       .addTo(controller)
//   }
  render () {
    return (
      <div className={'App'}>
        <div id='PinContainer' className={classes.PinContainer}>

          <NavBar />
          <Switch>
            <Route
              path='/home'
              render={() => (
                <Hero
                  color='is-dark'
                  largetext='My name is Matthew Riddle'
                  subtext='Some guy who writes code'
                />
              )}
            />
            <Route path='/about' render={() => <About />} />
            <Route path='/mywork' render={() => <MyWork />} />
          </Switch>

        </div>
        {/* <div id='PinContainer' className={classes.PinContainer} /> */}
      </div>
    )
  }
}

export default Home
