import React from 'react';
import { NavLink } from 'react-router-dom';

class About extends React.Component {
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
                                                className="about-max-one-media"><img src={require('./../../assets/images/intro-pic.jpg').default} alt="" /></div>
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
                                                <h2>The Best Solution For All Industries And Factories</h2>
                                            </div>
                                            {/* TITLE END*/}
                                            <div className="about-one">
                                                <div className="about-year">
                                                    <div className="about-year-info">
                                                        <span>25</span>
                                                        <p>Year of Success</p>
                                                    </div>
                                                    <p>Manufacturing industry became a key sector of
                                                    production and labour in European and North
                                                    American countries during the Industrial
                                                    Revolution, upsetting previous mercantile and
                                                    feudal economies.
                      </p>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="wt-icon-box-wraper left bg-black m-b30">
                                                            <div className="icon-content">
                                                                <h4 className="wt-tilte">Best Quality Services</h4>
                                                                <p>Train with the best experts in body building field.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="wt-icon-box-wraper left bg-black m-b30">
                                                            <div className="icon-content">
                                                                <h4 className="wt-tilte">Lean Machines</h4>
                                                                <p>Our personal trainers will help you
                              find a perfect workout.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <NavLink to={"#"} className="site-button sb-bdr-dark">Learn More</NavLink>
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

export default About;