import React,{useEffect} from 'react';
import "./PortfolioMobile.scss";
import "../Glitch.scss";
import gsap, {TimelineLite} from "gsap";
import {Link} from "react-router-dom";
import FairviewVid from "../Assets/FairviewAndroid.mp4";

gsap.registerPlugin(TimelineLite);

export default function PortfolioMobile() {
    useEffect(()=>{
        const tl = new TimelineLite();
        tl.from(".line",{
            x:1000,
            ease:"power2"
        })
        .from("#ball",{
            y:1000,
            ease:"power2"
        },"-=.5")
        
    },[])

    return (
        <div className="Landing-ColPort">
                <div className="headlinePort">
                    <h1 className="glitch" data-text="
    FAIRVIEW">FAIRVIEW</h1>  
                    <div className="NaviPort">
                            <Link to="/">
                            <svg id="ball" width='60' height='60'>
                                <circle cx='20' cy='20' r='20'  fill='#cc0000' />
                            </svg>
                        </Link>
                    </div>
                 </div>
                <div className="LinksPort">
                    <span className="line"></span>
                </div>
                <div className="FairviewVideo">
                    <video  autoPlay loop muted >
                        <source src={FairviewVid} type="video/mp4"></source>
                    </video>
                </div>
            </div>
    )
}