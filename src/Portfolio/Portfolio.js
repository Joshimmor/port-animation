import React, { Component } from 'react'
import PortfolioMobile from './PortfolioMobile';

export default class Landing extends Component {
    render() {
        let windowWidth = Window.innerWidth;
        if(windowWidth > 600){
            return(
                <PortfolioMobile/>
            )
        }else{
            return(
                <PortfolioMobile/>
            )
        }
    }
}
