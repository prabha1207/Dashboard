import React from 'react'
import '../Styles/Box.css'

function Box(props) {
  return (
    <div className="fourBox">
      <div className="logo">
        <img src="https://www.freeiconspng.com/uploads/c-logo-icon-18.png"></img>
      </div>
      <div className="data">
        <p className="left-float">
          {props.Title} <br></br>
          {props.Price}
          <br></br>
          <img className="arrow" src={props.Logo}></img>
          {props.Percentage}
        </p>
      </div>
    </div>
  )
}

export default Box
