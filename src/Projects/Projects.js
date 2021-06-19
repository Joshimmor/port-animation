import React, { Component } from 'react'
import ProjectsMobile from './ProjectsMobile';

export default class Projects extends Component {
    render() {
        let windowWidth = Window.innerWidth;
        console.log(windowWidth)
        if(windowWidth > 600){
            return(
                <ProjectsMobile/>
            )
        }else{
            return(
                <ProjectsMobile/>
            )
        }
    }
}
