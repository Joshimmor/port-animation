import React,{useRef, useEffect} from 'react';
import "./LandingMobile.scss";
import "../Glitch.scss";
import {TimelineLite} from "gsap";

export default function LandingMobile() {
    let LinkClassName = "";
    const Tag1 = useRef(null);
    const line = useRef(null);
    const tl = new TimelineLite();
    useEffect(()=>{
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
    },[tl])

    return (
        <div className="Landing-Col">
            <div className="headline">
                <h1 className="glitch" data-text="
Joshua Immordino">Joshua Immordino</h1>
            </div>
            <div className="Links">
                <span className="line"></span>
                <ul>
                    <li onMouseOver={()=> LinkClassName += "glitch"}  
                    data-text="PROJECTS"
                    id="tag1"
                    className={LinkClassName}>PROJECTS</li>
                    <li id="tag2">CONTACT</li>
                    <li id="tag3">GITHUB</li>
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
