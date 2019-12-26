import React from 'react'
import './base.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function NavBar(){
    return (
<nav className="navbar fixed-top navbar-expand-lg navbar-default" role="navigation">
    <div class="navbar-header cr-navbar-header">
        <a class="logo pull-left" href="#" height="30px"><img src={require('./static_img_tum-logo-white-xs.svg')} height="30px"></img></a>
        <a class="logo pull-left" href="#" height="30px"><img src={require('./static_img_commonroad_logo_white.svg')} height="30px"></img></a>
    </div>


  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Documentation
            </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Vechicle Model Documentation</a>
                    <a class="dropdown-item" href="#">Cost Function Documentation</a>
                    <a class="dropdown-item" href="#">XML Format Documentation</a>
                    <a class="dropdown-item" href="#">CommonRoad_IO Documentation</a>
                    <a class="dropdown-item" href="#">OpenDRIVE to Lanelet Converter Documentation</a>
                    <a class="dropdown-item" href="#">Collision Checker Documentation</a>
                    <a class="dropdown-item" href="#">CommonRoad-SUMO Interface</a>
                    <a class="dropdown-item" href="#">CommonRoad Search: Sampling-based motion planning</a>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-item nav-link" href="#">Tutorials</a>
            </li>

            <li className="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tools
            </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">CommonRoad_IO</a>
                    <a className="dropdown-item" href="#">Collision Checker</a>
                    <a className="dropdown-item" href="#">CommonRoad-SUMO Interface</a>
                    <a className="dropdown-item" href="#">OpenDRIVE to Lanelet Converter</a>
                    <a className="dropdown-item" href="#">CommonRoad Search: Sampling-based motion planning</a>
                    <a className="dropdown-item" href="#">SPOT</a>
                    <a className="dropdown-item" href="#">Vehicle Models for Python</a>
                    <a className="dropdown-item" href="#">Vehicle Models for MATLAB</a>
                </div>
            </li>

            <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Scenarios
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">CommonRoad_IO</a>
                    <a className="dropdown-item" href="#">Collision Checker</a>
                    <a className="dropdown-item" href="#">CommonRoad-SUMO Interface</a>
                    <a className="dropdown-item" href="#">OpenDRIVE to Lanelet Converter</a>
                    <a className="dropdown-item" href="#">CommonRoad Search: Sampling-based motion planning</a>
                    <a className="dropdown-item" href="#">SPOT</a>
                    <a className="dropdown-item" href="#">Vehicle Models for Python</a>
                    <a className="dropdown-item" href="#">Vehicle Models for MATLAB</a>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-item nav-link" href="#">Publications</a>
            </li>

            <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Community
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">CommonRoad_IO</a>
                    <a className="dropdown-item" href="#">Collision Checker</a>
                    <a className="dropdown-item" href="#">CommonRoad-SUMO Interface</a>
                    <a className="dropdown-item" href="#">OpenDRIVE to Lanelet Converter</a>
                    <a className="dropdown-item" href="#">CommonRoad Search: Sampling-based motion planning</a>
                    <a className="dropdown-item" href="#">SPOT</a>
                    <a className="dropdown-item" href="#">Vehicle Models for Python</a>
                    <a className="dropdown-item" href="#">Vehicle Models for MATLAB</a>
                </div>
            </li>
        </ul>

        <ul className="nav navbar-nav ml-auto">
        <li className="nav-item">
                <a className="nav-item nav-link" href="#">Submit New Solution</a>
            </li>
            <li className="nav-item">
                <a className="nav-item nav-link" href="#">
                    <FontAwesomeIcon icon={faCoffee} />
                    Login
                </a> 
            </li>
        </ul>
    </div>
</nav>

    )
}

export default NavBar;