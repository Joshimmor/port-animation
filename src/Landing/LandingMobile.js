import React from 'react';
import "./LandingMobile.scss";
import "../Glitch.scss";

export default function LandingMobile() {
    return (
        <div className="Landing-Col">
            <div className="headline">
                <h1 className="glitch" data-text="
Software Engineer">Software Engineer</h1>
            </div>
            <div className="Links">
                <span></span>
                <ul>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Github</li>
                </ul>
            </div>
            <div className="Navi">
                     <svg width='60' height='60'>
                         <circle cx='50' cy='50' r='40'  fill='9D0000' />
                    </svg>
            </div>
        </div>
    )
}
