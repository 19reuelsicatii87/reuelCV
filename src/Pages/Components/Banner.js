import React from 'react'
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";
import "../../Assets/css/Landing.css"


let index = 0;

function Banner() {

    const Text = [
        "Certified Professional",
        "Scrum Master",
        "Test Manager",
        "Automation Architect",
        "Fullstack Developer"

    ];

    const [typeName, setTypeName] = useState("Certified Professional");
    const intervalRef = useRef({});
    const name = useTypewriter(typeName);

    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                index = index > 3 ? 0 : ++index;
                //console.log(Text[index] + "--" + index);
                setTypeName(Text[index]);
            }, 5000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [typeName]
    );




    return (
        <section id="banner" className=" d-flex justify-content-center heroStyling"
            style={{ backgroundImage: `url(/Images/Hero01.jpg)` }}>
            <div className='container'>
                <div className='row'>
                    <div className='offset-md-4 col-md-6' >
                        <div className="d-flex align-items-center" style={{ height: '40vh' }}>
                            <div className="w-100">
                                <h1 className="w-100 text-end h1 fw-bold text-primary"
                                    style={{ fontFamily: "Arial Black, Impact", textShadow: "5px 5px 5px #4d3900" }}>REUEL SICAT II</h1>
                                <p className="w-100 text-end h4 text-primary">I'm a <span className="cursor fw-bold"> {name}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Banner