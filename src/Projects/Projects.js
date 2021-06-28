import React, { Component } from 'react'
import ProjectsMobile from './ProjectsMobile';

export default class Projects extends Component {
    render() {
        //useEffect
        let windowWidth = Window.innerWidth;
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
