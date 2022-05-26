import React from 'react'

function FullstackDeveloperExp() {
    return (
        <section id="fullstack-developer">
            <div className='container-fluid bg-light py-5'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='text-start text-primary'>
                            <img src="/Images/Developer.jpg" style={{ height: '100px', width: '100px', borderRadius: '50%' }} alt="SM-logo"></img>
                            {" "}Fullstack Developer
                        </h1>
                        <div className='row px-5 my-3'>
                            <div className='col-lg-5'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-robot"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Activities
                                </h2>
                                <ul>
                                    <li className='text-start'>Setup Test Automation Servers and install necessary applications</li>
                                    <li className='text-start'>Design and create a Test Automation using BDD Framework using Selenium, Appium, ExtentReport, Cucumber, Maven and Jhenkin</li>
                                    <li className='text-start'>Establish  code hosting platform for version control using GitHub or BitBucket</li>
                                    <li className='text-start'>Execute Test Automation scripts during regression test cycles</li>
                                    <li className='text-start'>Accurately report Test Automation progress as well as Bugs against Application Under Test</li>
                                    <li className='text-start'>Maintain and expand Test Automation Suite based on the recent changes of Application Under Test</li>
                                </ul>
                            </div>
                            <div className='col-lg-6 offset-lg-1'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-person"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Highlights
                                </h2>
                                <ul>
                                    <li className='text-start'>Captures Test Automation Report and store results in DataBase</li>
                                    <li className='text-start'>Integrate Database with Data Studio Report that displays the summary of the current and previous test</li>
                                    <li className='text-start'>Integrate Database with a Data Studio Report that displays the historical trend (pass or fail) per test cases</li>
                                </ul>
                            </div>
                        </div>
                        <div className='row px-5'>
                            <div className='col-lg-12'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-globe"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Web Application
                                </h2>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-lg-6 p-3'>
                                        <div className="card">
                                            <div className='d-flex justify-content-center p-3'>
                                                <img src="/Images/Ecomm_logo.png" className="card-img-top"
                                                    alt="test-automation-template"></img>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold">Ecommerce Website</h5>
                                                <p className="card-text">A WebApp where customers can place and track orders.
                                                    It is integrated to Paymongo as its Billing Gateway. In addition, its capable of
                                                    capturing leads as well as sending marketing materials.</p>
                                                <a href="https://malasakitoneopti.netlify.app/"
                                                    className="btn btn-primary">
                                                    Visit WebApp {" "}
                                                    <i className="bi bi-box-arrow-in-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 p-3'>
                                        <div className="card">
                                            <div className='d-flex justify-content-center p-3'>
                                                <img src="/Images/CRM_logo.png" className="card-img-top"
                                                    alt="test-automation-template"></img>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold">Ecommerce CRM Website</h5>
                                                <p className="card-text">A WebApp to support the Ecommerce WebApp that serves as "Customer Relation Management".
                                                    Basic function includes CRUD of all placed orders as well as captured leads.</p>
                                                <a href="https://malasakitoneopti.netlify.app/dashboard/login"
                                                    className="btn btn-primary">
                                                    Visit WebApp {" "}
                                                    <i className="bi bi-box-arrow-in-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FullstackDeveloperExp