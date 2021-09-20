import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark border border-warning bg-dark">
  <a className="navbar-brand text-warning" href="#">NewsMonkey</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link text-info" href="#">Home&#127968; <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-info" href="#">About&#128373;</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-info" href="#">Business&#128185;</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-info" href="#">General&#128250;</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-info" href="#">Health&#128154;</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-info" href="#">Sports&#9917;</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-info" href="#">Technology&#128295;</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-info" href="#">Science&#128640;</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-info" href="#">Entertainment&#127917;</a>
      </li>
    </ul>

    {/* <form className="form-inline my-2 my-lg-0 d-flex ml-auto">
      <input className="form-control border border-warning mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn py-1 btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
            </div>
        )
    }
}
