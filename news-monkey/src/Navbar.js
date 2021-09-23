import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark border border-warning bg-dark">
          <Link className="navbar-brand text-warning" to="/home">NewsMonkey</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-info" to="/">Home&#127968; <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/business">Business&#128185;</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/health">Health&#128154;</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/sports">Sports&#9917;</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/technology">Technology&#128295;</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/science">Science&#128640;</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/entertainment">Entertainment&#127917;</Link>
              </li>
            </ul>

          </div>
        </nav>
      </div>
    )
  }
}
