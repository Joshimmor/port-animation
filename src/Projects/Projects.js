import React, { Component } from 'react'
import Projectsdesktop from './Projectsdesktop';
import ProjectsMobile from './ProjectsMobile';

export default class Projects extends Component {
    render() {
        let windowWidth = Window.innerWidth;
        console.log(windowWidth)
        if(windowWidth > 600){
            return(
                <Projectsdesktop/>
            )
        }else{
            return(
                <ProjectsMobile/>
            )
        }
    }
}
