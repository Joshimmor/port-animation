import React,{useEffect} from 'react';
import "./ProjectMobile.scss";
import "../Glitch.scss";
import {TimelineLite} from "gsap";
import {Link} from "react-router-dom";

export default function LandingMobile() {
    useEffect(()=>{
        const tl = new TimelineLite();
        tl.from(".line",{
            x:-1000,
            ease:"power2"
        })
        .from("#ball",{
            x:1000,
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
        <div className="Landing-colPM">
            <div className="headlinePM">
                <h1 className="glitch" data-text="
Projects">Projects</h1>
            <div className="NaviPM">
                    <Link to="/">
                        <svg id="ball" width='60' height='60'>
                            <circle cx='20' cy='20' r='20'  fill='#cc0000' />
                        </svg>
                    </Link>
            </div>
            </div>
            <div className="LinksPM">
                <span className="line"></span>
                <ul>
                    <li id="tag1">
                        <Link 
                        to="/fairview">FAIRVIEW</Link>
                    </li>
                    <li id="tag2">
                    <Link 
                        to="/">SHAREITY</Link>
                    </li>
                    <li id="tag3">
                    <Link 
                        to="/">RESEARCH</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}