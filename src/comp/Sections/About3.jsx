import React from 'react';
import { NavLink } from 'react-router-dom';

class About3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120 p-b90">
                    <div className="about-section-three">
                        <div className="container">
                            <div className="section-content">
                                <div className="row justify-content-center d-flex">
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="about-max-three">
                                            <div className="about-max-three-media"><img src={require('./../../assets/images/intro-pic3.jpg').default} alt="" /></div>
                                            <div className="about-three">
                                                <div className="about-year">
                                                    <div className="about-year-info">
                                                        <span>450</span>
                                                        <p>Projects Were Completed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="about-section-three-right">
                                            {/* TITLE START*/}
                                            <div className="section-head left wt-small-separator-outer">
                                                <div className="wt-small-separator site-text-primary">
                                                    <div className="sep-leaf-left" />
                                                    <div>Know About Us</div>
                                                </div>
                                                <h2>Bringing Growth to Agriculture</h2>
                                            </div>
                                            {/* TITLE END*/}
                                            <div className="ab-three-info">
                                                <p>Wild flowers , plants and fungi are the life support for all our wildlife and their colour and character light up our landscapes. But without our help , this priceless natural heritage is in danger of being lost.
                    </p>
                                            </div>
                                            <div className="row ab-two-icon-section">
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="wt-icon-box-wraper left bg-black m-b30">
                                                        <span className="icon-md site-text-primary">
                                                            <i className="flaticon-harvest " />
                                                        </span>
                                                        <div className="icon-content">
                                                            <h4 className="wt-tilte">Growing Fruits and Vegetables</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="wt-icon-box-wraper left bg-black m-b30">
                                                        <span className="icon-md  site-text-primary">
                                                            <i className="flaticon-vegetables" />
                                                        </span>
                                                        <div className="icon-content">
                                                            <h4 className="wt-tilte">Tips for Ripening your Fruits</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ab-three-info">
                                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                                                <NavLink to="/about" className="site-button sb-bdr-dark">Learn More</NavLink>
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

export default About3;