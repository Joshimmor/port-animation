import React, { Component } from 'react'
import ContactMobile from "./ContactMobile"

export default class Projects extends Component {
    render() {
        let windowWidth = Window.innerWidth;
        console.log(windowWidth)
        if(windowWidth > 600){
            return(
                <ContactMobile/>
            )
        }else{
            return(
                <ContactMobile/>
            )
        }
    }
}
