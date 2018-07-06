import React, { Component } from 'react'
import classes from './About.css'

class About extends Component {
  render () {
    return (
      <div className='wrap'>
        <section
          className={`${classes.DarkGrey} ${classes.Tall} ${classes.FullWidth}`}
        >
          <div className='container'>
            <h1>About me</h1>
          </div>
        </section>
        <section
          className={`section ${classes.FullWidth} ${classes.FullHeight}`}
        >
          <div className='container'>
            <div className={classes.TextBackdrop}>
              <p>
                Hometown: Summertown Tennessee <br />
                Work History: <br />
                2010 - 2016 US Air Force <br />
                2010-2013 Comm/Nav Technician E3 Sentry AWACS <br />
                2013-2016 CTK Crew Chief <br />
              </p>
            </div>
            <div className={classes.TextBackdrop}>
              <p>
                Education<br />
                2016 - 2018 University of West O'ahu - Creative Media <br />
                2017 - 2018 Self Taught Software Development<br />
                2018 - present: Cook Systems Fast Track'd program <br />
              </p>
            </div>
            <div className={classes.TextBackdrop}>
              <p>
                Software Development Skills:<br />
                Java <br />
                JavaScript<br />
                Node.js <br />
                C++ <br />
                Spring FrameWork <br />
                React / Redux <br />
              </p>
            </div>
          </div>
        </section>
        <section
          className={`section ${classes.FullWidth} ${classes.FullHeight}`}
        >
          <div className='container' />
        </section>
        <section
          className={`${classes.FullWidth} ${classes.FullHeight} ${classes.DarkGrey}`}
        >
          <div className='container' />
        </section>
      </div>
    )
  }
}

export default About
