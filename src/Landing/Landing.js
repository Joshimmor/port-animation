import React, { Component } from 'react'
import LandingMobile from './LandingMobile';

export default class Landing extends Component {
    render() {
        let windowWidth = Window.innerWidth;
        if(windowWidth > 600){
            return(
                <LandingMobile/>
            )
        }else{
            return(
                <LandingMobile/>
            )
        }
    }
}
