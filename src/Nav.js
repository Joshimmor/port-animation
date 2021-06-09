import React, { Component } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
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

                <div className="menu_bars" onClick={this.toggleNav}>
                    <span className="bar1"/>
                    <span className="bar2"/>
                    <span className="bar3"/>
                </div>
           
        </div>
        )
    }
}

