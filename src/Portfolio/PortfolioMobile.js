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
        .from(".port-buttons",{
            opacity:0,
            ease:"power2"
        })
        
    },[])

    return (
        <div className="Landing-ColPort">
                 <div className="FairviewVideo">
                    <video  autoPlay loop muted playsinline >
                        <source src={FairviewVid} type="video/mp4"></source>
                    </video>
                </div>
                <div className="headlinePort">
                    <h1 className="glitch" data-text="
        FAIRVIEW">FAIRVIEW</h1>  
                    <div className="NaviPort">
                        <Link style={{zIndex:"2"}} to="/">
                            <svg  id="ball" width='60' height='60'>
                                <circle cx='20' cy='20' r='20'  fill='#cc0000' />
                            </svg>
                        </Link>
                    </div>
                 </div>
                <div className="LinksPort">
                    <span style={{zIndex:"2"}} className="line"></span>
                </div>
                <div className="action-row">
                        <Link className="port-buttons" to="/">
                            HOME
                        </Link>
                        <a  className="port-buttons" rel="noreferrer" target="_blank"
                     href="https://github.com/Joshimmor/job-logger-api">GITHUB</a>
                </div>
            </div>
    )
}