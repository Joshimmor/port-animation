import React, { useRef, useEffect } from 'react';
import {Link} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Home.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default function Home() {
    const tl =  gsap.timeline();
    const tl2 =  gsap.timeline({
        scrollTrigger:{
            trigger:".Fairview-div",
            start: "center center"
            } 
    });
    const tl3 =  gsap.timeline({
        scrollTrigger:{
            trigger:".Past-div",
            start:"bottom top"
            } 
    });
    const tagLine = useRef(null);
    const Tag1 = useRef(null);
    const Tag2 = useRef(null);
    const Tag3 = useRef(null);
    const Tag4 = useRef(null);
    const FairviewTextbox = useRef()
    const Pastcatch = useRef()
    useEffect(()=>{
       
        tl2.from("#tag1",{
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
        .from("#tag4",{
            opacity:0,
            ease:"power2"
        })
        .from(".Fairview-Textbox",{
            width:0,
            ease:"power2"
        })
        .from(".Past-Catch",{
            height:0,
            width:0,
            ease:"power2"
        })
        .from("#fairview-button",{
            opacity:0,
            ease:"power2"
        })
        tl.from("#name",{
            y:100,
            ease:"elastic",
            duration:3
        })
        
        
    },[tl,tl2,tl3])
    return (
        <section className="Home-wrapper" >
            <div className="Landing-div" ref={tagLine}>
                <h1 id="name">Joshua</h1>
                <h1 id="name">Immordino</h1>
            </div>
            <div className="Fairview-div">
                    <div className="Fairview-Textbox" ref={FairviewTextbox}>
                       <h2>Fairview Healthcare Services</h2> 
                       <p>Building Android Applications with a Restful API and MySQL backend for managerial software. Also build Firebase hosted
                           react Applications for Covid Tracking in a Cloud Database. </p>
                        <div className="link-row">
                            <button id="fairview-button" >
                                 <Link to="projects" >Views</Link>
                            </button>
                            <button id="fairview-button">
                                <a href="https://github.com/Joshimmor/job-logger-api"
                                 target="_Blank" rel="noreferrer" className="links-BTN">Github</a> 
                            </button>
                        </div> 
                    </div>
                    <div className="Fairview-Catch">
                        <h2 id="tag1" ref={Tag1}>Java Developer</h2>
                        <p id="tag2" ref={Tag2}>Building Scalable APIs</p>
                        <p id="tag3" ref={Tag3}>Android Applications</p>
                        <p id="tag4" ref={Tag4}>Creating business logic to problems</p>
                    </div>
            </div>
            <div className="Past-div">
                    <div className="Past-Catch" ref={Pastcatch}>
                        <h2>Java Developer</h2>
                        <p>here goes something else</p>
                    </div>
                    <div className="Past-text">
                    </div>
            </div>
         </section>
    )
}

