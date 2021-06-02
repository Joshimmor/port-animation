import React from 'react';
import './App.scss';
import folder from "./assests/folder.svg";
import github from "./assests/github.svg";
import linkedin from "./assests/linkedin.svg";
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <div className="navBar-section">
            <div className="navBar">
                <a href="https://github.com/Joshimmor" target="_blank">
                    <img className="nav-links" src={github} alt="github"/>
                </a>
                <a href="">
                    <img className="nav-links" src={linkedin} alt="linkedin"/>
                </a>
                <Link to="/projects">
                 <img className="nav-links" src={folder} alt="folder"/>
                </Link>
            </div>
        </div>
    )
}
