import React, { useRef, useEffect } from 'react';
import {Link} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FormspreeProvider } from '@formspree/react';
import Form from "./Form";
import "./Home.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default function Home() {
    const tl =  gsap.timeline();
    const tl2 =  gsap.timeline({
        scrollTrigger:{
            trigger:".Fairview-div",
            start: "top bottom"
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
            opacity:0,
            ease:"power2"
        })
        .from("#tag5",{
            opacity:0,
            ease:"power2"   
        })
        .from("#tag6",{
            opacity:0,
            ease:"power2"
        })
        .from("#tag7",{
            opacity:0,
            ease:"power2"
        })
        .from("#tag8",{
            opacity:0,
            ease:"power2"
        })
        .from(".Past-Task",{
            x:600
        })
        .from(".Past-Catch",{
            x:2000,
            opacity:0,
            ease:"power2"
        })
        .from("#fade",{
            opacity:0,
            ease:"power2"
        })
        tl.from("#name",{
            y:100,
            ease:"elastic",
            duration:3
        })
        
        
    },[tl,tl2])
    return (
        <section className="Home-wrapper" >
            <div className="Landing-div" ref={tagLine}>
                <h1 id="name">Joshua</h1>
                <h1 id="name">Immordino</h1>
            </div>
            <div className="Fairview-div">
                    <div className="Fairview-Textbox" ref={FairviewTextbox}>
                       <h2 id="fade">Fairview Healthcare Services</h2> 
                       <p id="fade">Building Android Applications with a Restful API and MySQL backend for managerial software. Also built Firebase hosted
                           react Applications for Covid Tracking in a Cloud Database. </p>
                        <div className="link-row">
                            <button id="fade" >
                                 <Link to="projects" >Views</Link>
                            </button>
                            <button id="fade">
                                <a href="https://github.com/Joshimmor/job-logger-api"
                                 target="_Blank" rel="noreferrer" className="links-BTN">Github</a> 
                            </button>
                        </div> 
                    </div>
                    <div className="Fairview-Catch">
                        <h2 id="tag1" ref={Tag1}>Java Developer</h2>
                        <p id="tag2" ref={Tag2}>Building Scalable APIs</p>
                        <p id="tag3" ref={Tag3}>Android Applications</p>
                        <p id="tag4" ref={Tag4}>Creating Business Logic</p>
                    </div>
            </div>
            <div className="Past-div">
                <div className="task-row">
                    <div className="Past-Task">
                        <h2 id="tag5" ref={Tag1}>Framework7/Vue Developer</h2>
                        <p id="tag6" ref={Tag2}>Building Views that Convert</p>
                        <p id="tag7" ref={Tag3}>Designing User Personas</p>
                        <p id="tag8" ref={Tag4}>Testing and Tracking</p>
                    </div>
                </div>
                    <div className="Past-Catch" ref={Pastcatch}>
                        <div className="Past-headline">
                            <h2 id="fade">Shareity</h2>
                            <p id="fade">Collaborated with Product Owners, Architects, Developers and other cross 
                                functional teams to determine the optimum user interface design, 
                                workflow and functionality</p>
                            <div className="link-row">
                                    <button id="fade" >
                                        <Link to="projects" >Views</Link>
                                    </button>
                                    <button id="fade">
                                        <a href="https://shareity.com/"
                                        target="_Blank" rel="noreferrer" className="links-BTN">Shareity</a> 
                                    </button>
                            </div> 
                        </div>
                    </div>
                    <div className="Past-text">
                        <FormspreeProvider project="1592168122427637470">
                             <Form />
                        </FormspreeProvider>
                    </div>
            </div>
         </section>
    )
}

