import React,{useRef} from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import {Link} from "react-router-dom";
import "./Home.scss";

export default function Home() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 10, delay: 0});

    return (
        <section className="Home-wrapper" ref={scrollRef}>
            <div className="Landing-div">
                <h1>Joshua</h1>
                <h1>Immordino</h1>
            </div>
            <div className="Fairview-div">
                    <div className="Fairview-Textbox">
                       <h2>Fairview Nonsense</h2> 
                       <p>someother nonsense goes here</p>
                    </div>
                    <div className="Fairview-Catch">
                        <h2>Java Developer</h2>
                        <p>here goes something else</p>
                    </div>
            </div>
            <div className="Past-div">
                    <div className="Past-Catch">
                        <h2>Java Developer</h2>
                        <p>here goes something else</p>
                    </div>
                    <div className="Past-text">
                    </div>
            </div>
         </section>
    )
}

