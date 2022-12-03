import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Header(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{color:props.mode==='light'?'black':'white'}}>
    <div className="container-fluid">
      <img src="" alt="logo" className="nav-laog" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" style={{color:props.mode==='light'?'black':'white'}}>{props.about}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About" style={{color:props.mode==='light'?'black':'white'}}>{props.Features}</Link>
          </li>
        </ul>
         <div className="form-check form-switch">
           <input className="form-check-input" onClick={props.collerMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> */}
         </div>
      </div>
    </div>
  </nav>
  )
}

// Header.propTypes ={
//     about: PropTypes.string,
//     Features :PropTypes.string
//   }
  
