import React,{useEffect} from 'react';
import "./LandingMobile.scss";
import "../Glitch.scss";
import gsap, {TimelineLite} from "gsap";
import {Link} from "react-router-dom";
gsap.registerPlugin(TimelineLite);
export default function LandingMobile() {
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
        .from("#tag1",{
            opacity:0,
            ease:"power2"
        })
        .from("#tag2",{
            opacity:0,
            ease:"power2"
        })
        .from("#tag3",{
            opacity:0,
            ease:"power2"
        })
    },[])

    return (
        <div className="Landing-Col">
            <div className="headline">
                <h1 className="glitch" data-text="
                Joshua Immordino">Joshua Immordino</h1>
            </div>
            <div className="Links">
                <span className="line"></span>
                <ul>
                    <li id="tag1">
                        <Link 
                        to="/projects">PROJECTS</Link>
                    </li>
                    <li id="tag2">
                    <Link 
                        to="/contact">CONTACT</Link>
                    </li>
                    <li id="tag3">
                    <a   rel="noreferrer" target="_blank"
                     href="https://github.com/Joshimmor">GITHUB</a>
                    </li>
                </ul>
            </div>
            <div className="Navi">
                     <svg id="ball" width='60' height='60'>
                         <circle cx='20' cy='20' r='20'  fill='#cc0000' />
                    </svg>
            </div>
        </div>
    )
}