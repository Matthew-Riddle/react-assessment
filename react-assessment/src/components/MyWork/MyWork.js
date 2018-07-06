import React, { Component } from 'react'
import classes from './MyWork.css'

class MyWork extends Component {
  render () {
    return (
      <div className='wrap'>
        <section
          className={`${classes.DarkGrey} ${classes.Tall} ${classes.FullWidth}`}
        >
          <div className='container'>
            <h1>My work</h1>
          </div>
        </section>
        <section
          className={`section ${classes.FullWidth} ${classes.FullHeight}`}
        >
          <div className='container'>
            <div className={`${classes.TextBackdrop}`}>
              <p>
                Java Client-Handler App
                <br />

                <a href='https://github.com/Matthew-Riddle/java-client-handler-Matthew-Riddle'>
                  <i
                    className={`fab fa-github-square ${classes.FontAwesome}`}
                  />
                  GitHub
                </a>
                <br />
                Create a ServerSocket that accepts Socket connections. After accepting the Socket connection, pass the Socket to a new ClientHandler thread and start that Thread. The ServerSocket will then begin awaiting a new connection. The client will wait 3 seconds then send a message to the server, to which the server will respond with Message Accepted:
                {' '}
                message
                . Create a test case that will spawn 10 client requests, and wait 5 seconds to receive responses from each of the client requests.
              </p>
            </div>
            <div className={`${classes.TextBackdrop}`}>
              <p>
                Spring Controllers and Services project
                <br />

                <a href='https://github.com/Matthew-Riddle/spring-controllers-and-services-Matthew-Riddle'>
                  <i
                    className={`fab fa-github-square ${classes.FontAwesome}`}
                  />
                  GitHub
                </a>
                <br />
                A spring boot application which implemented a REST api in connection with a postgres SQL database. The concept of this assignment is to create a Spring Boot API project that will keep track of People and their Friends.
                {' '}
              </p>
            </div>
            <div className={`${classes.TextBackdrop}`}>
              <p>
                Node.Js Quizler Assignment
                <br />

                <a href='https://github.com/Matthew-Riddle/js-assessment-quizler-Matthew-Riddle'>
                  <i
                    className={`fab fa-github-square ${classes.FontAwesome}`}
                  />
                  GitHub
                </a>
                <br />
                A javascript application using Node as the coding environment. This project simulates creating a quizlet set of flashcards that have questions along with 2 answers to choose from. The answers are stored in another file so the user can keep track of their answers. The npm packages inquirer.js and vorpal.js were used to build the command line tool.
                {' '}
              </p>
            </div>
            <div className={`${classes.TextBackdrop}`}>
              <p>
                React/Redux Twitter Clone
                <br />

                <a href='https://github.com/Matthew-Riddle/redux-assignment-Matthew-Riddle'>
                  <i
                    className={`fab fa-github-square ${classes.FontAwesome}`}
                  />
                  GitHub
                </a>
                <br />
                In this project I have created a simple clone of Twitter using React and Redux that has the ability to create and delete tweets. The tweets are stored on a Firebase server and are retrieved on the application start up.
                {' '}
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

export default MyWork
