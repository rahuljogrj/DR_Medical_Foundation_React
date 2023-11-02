import React from 'react'
import { Link } from "react-router-dom";

const ProjectDetails = () => {
    return (
        <div>

            <div className="container bg-gray my-4">
                <div className="section-head col-sm-12">
                    <h4>
                        <span>Serv</span>ices
                    </h4>
                </div>
                <div className="Scontainer">


                    <div className="card">
                        <div className="img-box">
                            <img src="/images/CT scan.jpg" />
                        </div>
                        <div className="content">
                            <h2>CT scan</h2>
                            <p>
                                CT scan uses X-rays and computer processing to create detailed images of
                                the body's internal structures. It's used to diagnose a range of medical
                                conditions.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-box">
                            <img src="/images/sonography.jpg" />
                        </div>
                        <div className="content">
                            <h2>Sonography</h2>
                            <p>
                                Sonography, also known as ultrasound imaging, is a medical imaging
                                technique that uses high-frequency sound waves to produce images of
                                internal body structures in real-time without using ionizing radiation.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-box">
                            <img src="/images/MRI.jpg" />
                            {/* <img src="https://i.postimg.cc/26fms7F7/img-03.png"> */}
                        </div>
                        <div className="content">
                            <h2>MRI</h2>
                            <p>
                                Magnetic resonance imaging (MRI) is a non-invasive medical imaging
                                technique that uses a powerful magnetic field, radio waves, and a
                                computer to produce detailed images of internal body structures.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-box">
                            <img src="/images/Xray.jpg" />
                            {/* <img src="https://i.postimg.cc/pdjRc68d/img-02.png"> */}
                        </div>
                        <div className="content">
                            <h2>X-Ray</h2>
                            <p>
                                X-ray imaging is a medical imaging technique that uses ionizing
                                radiation to produce images of internal body structures. It is commonly
                                used to diagnose bone fractures, lung infections, and dental problems.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-box">
                            <img src="/images/blood_test.jpg" />
                            {/* <img src="https://i.postimg.cc/26fms7F7/img-03.png"> */}
                        </div>
                        <div className="content">
                            <h2>Blood Test</h2>
                            <p>
                                Blood tests are medical laboratory tests that analyze a sample of blood
                                to diagnose, monitor, and manage various medical conditions. They can
                                measure blood cell counts, cholesterol levels, and detect infections,
                                among other things.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-box">
                            <img src="/images/health_check_ups.jpg" />
                            {/* <img src="https://i.postimg.cc/26fms7F7/img-03.png"> */}
                        </div>
                        <div className="content">
                            <h2>Health checkups</h2>
                            <p>
                                Health checkups are preventive medical examinations that involve various
                                tests, screenings, and evaluations to assess overall health and detect
                                any potential health problems. They are recommended for people of all
                                ages.
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>


        </div>
    )
}

export default ProjectDetails