import React from "react";
import './Landing.scss'

class Landing extends React.Component {
  render() {
    return (
      <div id="page__landing" className="page__landing">
        <h1>Lee Stevens v3</h1>
        <p className="read-the-docs">
          Full-Stack Web Developer<br></br>
          Angular, ASP.NET, SQL & React
        </p>
      </div>
    )
  }
}

export default Landing;