import React,{useRef,useEffect} from 'react';
import './App.scss';
import ballLogo from "./assests/bglogo.svg";
import Android from "./assests/android.svg";
import Atom from "./assests/atom.svg";
import Nav from "./Nav";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

function CurrentJob(){
    const android = useRef(null);
    const CurrentJob =useRef(null);
    const T5 = gsap.timeline({
        scrollTrigger:{
            trigger:"#currentJob",
            start: "top top ",
        }
    })
    useEffect(()=>{
        T5.to("#Android",{rotate:360,x:250, opacity:1,scale:1,delay:.25})
        .from(".fairview",{opacity:0,y:100,ease:"elastic",duration:2,delay:.25})
    },[])
    if(window.innerWidth > 600){
        return(
            <div className="detail-section" id="currentJob">
                <div ref={CurrentJob} className="text-col fairview">
                            <h1>//What am I up to?</h1>
                            <h3 className="fairview-text">I've been working as a developer for a health care facility in 2021, 
                                solving problems for facility administrators by working closely with nursing and support staff.
                                I've built Covid-screening web-applications with Firebase and React. I've also built Android based
                                managerial tools to help the facility operate during this difficult time.</h3>
                                <div className="buttonRow">
                        <a href="#" className="myButton">Code</a>
                        <a href="#" className="myButton">Views</a>
                 </div>   
                                
                 </div>
                
                <div className="img-col">
                                    <img ref={android} id="Android" src={Android} alt="ball-logo"/>
                </div>
                
            </div>
        )
    }else{
        return(
            <div className="detail-section" id="currentJob">
                <div className="img-col">
                                    <img ref={android} id="Android" src={ballLogo} alt="ball-logo"/>
                </div>
                <div ref={CurrentJob} className="text-col fairview">
                            <h3 className="fairview-text">I've been working as a developer for a health care facility in 2021, 
                                solving problems for facility administrators by working closely with nursing and support staff.
                                I've built Covid-screening web-applications and managerial tools to help the facility operate during this
                                difficult time.</h3>
                 </div>
                
            </div>
        )
    }
    
}
function PastJobs(){
    const atom = useRef(null);
    const PastJob =useRef(null);
    const T7 = gsap.timeline({
        scrollTrigger:{
            trigger:"#pastJobs",
            start: "center top ",
        }
    })
    useEffect(()=>{
        T7.from("#Atom",{y:300, opacity:0, ease:"elastic",duration:2})
        T7.to("#Atom",{rotate:"720", scale:.5,duration:30, ease:"none"},"-=2")
        .from(".before-this",{opacity:0,x:200,ease:"elastic",duration:2},"-=30")
    },[])
    if(window.innerWidth < 600){
        return(
            <div className="detail-section" id="pastJobs">
                <div className="text-col before-this ">
                            <h2>//Before this?</h2>
                            <h3>I've been a UX developer working for companies like Shareity, Shareity is a series B Charity-based startup.
                                 There I worked closely with the Marketing department and the Development teams to created  engaging views 
                                 in frameworks like framework7 and Vue in their web-app. 
                            </h3>
                 </div>
                <div className="img-col">
                                    <img ref={atom} id="Atom" src={Atom} alt="ball-logo"/>
                </div>
                
            </div>
        )
    }else{
        return(
            <div className="detail-section">
                <div className="img-col">
                                    <img ref={atom} id="Atom" src={Atom}alt="ball-logo"/>
                </div>
                <div className="text-col before-this">
                            <h2>//Before this?</h2>
                            <h3>I've been a UX developer working for companies like Shareity, Shareity is a series B Charity-based startup.
                                 There I worked closely with the Marketing department and the Development teams to created  engaging views 
                                 in frameworks like framework7 and Vue in their web-app. 
                            </h3>
                 </div>
                
            </div>
        )
    }
    
}

export default function Home() {
    const Logo = useRef(null);
    const T1 = gsap.timeline();
    const T2 = gsap.timeline({
        scrollTrigger:{
            trigger:".detail-section",
            start: "top",
            end: "250",
            scrub:true
        },
        paused:true
    })
    useEffect(()=>{
        T1.from("#name",{x:500,ease:"power4",delay:1})
        .from("#ball-logo",{rotate:360, x:500,ease:"power4",duration:2 ,opacity:0},"-=.5")
        .from("#tag-1",{opacity:0, ease:"power4"},"-=1")
        .from("#tag-2",{opacity:0, ease:"power4"},"-=.5")
        .from("#tag-3",{opacity:0, ease:"power4"});
        
        //T2.to("#ball-logo",{rotate:360, scale:2})
    },[])
    
    return (
        <div className="home-section">
            <div className="timeline">
            </div>
            <div className="details">
                <div className="detail-section " id ="section-1">
                    <div className="img-col">
                        <img ref={Logo} id="ball-logo" src={ballLogo} alt="ball-logo"/>
                    </div>
                    <div className="text-col">
                        <h1 id="name"> // joshuaImmordino</h1>
                        <h3 id="tag-1">Electrical Engineering Student</h3>
                        <h3 id="tag-2">Full Stack Developer</h3>
                        <h3 id="tag-3">Robotic Enthusiast</h3>
                    </div>
                    
                </div>
                <CurrentJob/>
                <PastJobs/>
            </div>  
            <Nav/> 
        </div>
    )
}
