import React from 'react';

class MainAbout extends React.Component {
    render() {
        return (
            <>

                <div className="section-full p-t120 p-b90 bg-no-repeat bg-center bg-gray-light">
                    <div className="about-section-one">
                        <div className="container">
                            <div className="section-content">
                                <div className="row justify-content-center d-flex">
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="about-max-one">
                                            <div
                                                className="about-max-one-media"><img src={require('../../../assets/images/AboutUs.jpg').default} alt="" /></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="about-section-one-right">
                                            {/* TITLE START*/}
                                            <div className="section-head left wt-small-separator-outer">
                                                <div className="wt-small-separator site-text-primary">
                                                    <div className="sep-leaf-left" />
                                                    <div>About Us</div>
                                                </div>
                                                <h2>Suralpadi Group of Companies</h2>
                                            </div>
                                            {/* TITLE END*/}
                                            <div className="about-one">
                                                <div className="about-year">
                                                    {/* <div className="about-year-info">
                                                        <span>25</span>
                                                        <p>Year of Success</p>
                                                    </div> */}
                                                    <p>Handling these Digitized Machines requires a high level of expertise and experience. So it is pivotal to have a good understanding about the functionality and the way it operated before it is deployed to do its job. Since we are very much aware of this fact, our team will simplify the process by understanding your requirement. So that you can get to know the tips and tricks to utilize the real potentiality of the machines in a more methodical manner.</p>
                                                </div>                                            
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="wt-icon-box-wraper left bg-black m-b30">
                                                            <div className="icon-content">
                                                                <h4 className="wt-tilte">Cutting Edge Technology</h4>
                                                                <p>Quicken up your production pace.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="wt-icon-box-wraper left bg-black m-b30">
                                                            <div className="icon-content">
                                                                <h4 className="wt-tilte"> High Precision Metrology  </h4>
                                                                <p>Handheld 3D Laser Scanners to deliver top notch metrological solutions.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <NavLink to={"#"} className="site-button sb-bdr-dark">Learn More</NavLink> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default MainAbout;