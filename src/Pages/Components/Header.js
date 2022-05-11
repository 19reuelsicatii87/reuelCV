import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"

function Header() {


    const [orderCode, setOrderCode] = useState();
    const navigate = useNavigate();

    function trackPackage() {

        navigate('/order/summary/' + orderCode)

    }

    return (
        <section id="header">
            <div id="menu">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <div>
                            <a className="navbar-brand" href="/">
                                <img src="/Images/Logo01.jpg" alt="logo" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div>
                            <div className="collapse navbar-collapse" id="navbarColor03">

                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#banner">Home
                                            <span className="visually-hidden">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#about-me">About Me</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#skill">Skills</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link active dropdown-toggle"
                                            href="/#" id="navbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Experience
                                        </a>
                                        <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/order/packageform">Scrum Master</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/order/productform">Test Manager</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/order/productform">Automation Architect</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/order/productform">Fullstack Developer</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#credential">Credentials</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#contact">Contact Me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Header
