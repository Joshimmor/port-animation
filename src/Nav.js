import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './Nav.scss';


export default class Nav extends Component {
    constructor(){
        super();
        this.state ={
            open : true
        }
        this.toggleNav = this.toggleNav.bind(this)
    }
    
    toggleNav() {
        this.setState({open:!this.state.open})
    }
    render() {
        console.log(this.state.open)
        return (
            <div className={this.state.open? "nav":"nav-div"}>
                <div className={this.state.open? "menu_bars":"close"} onClick={this.toggleNav} >
                    <span className="bar1"/>
                    <span className="bar2"/>
                    <span className="bar3"/>
                </div>
                <div className={this.state.open? "invis":"vis"}>
                    <ul>
                        <li>
                            <Link to="/projects" onClick={this.toggleNav} className="nav-links">Projects</Link>
                        </li>
                        <li>
                            <a   rel="noreferrer" target="_blank" onClick={this.toggleNav} href="https://github.com/Joshimmor"className="nav-links">Github</a>
                        </li>
                        <li>
                            <Link to="/" onClick={this.toggleNav} className="nav-links">Home</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

