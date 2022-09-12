import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';

class ServiceDetails extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner title="Service Details" />
                    <div className="section-full p-t120 p-b90 bg-white">
                        <div className="section-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-12 rightSidebar">
                                        <div className="all_services m-b30">
                                            <ul>
                                                <li><NavLink to="/services">All Services</NavLink></li>
                                                <li><NavLink to="/services">Oil &amp; Gas Engineering</NavLink></li>
                                                <li><NavLink to={"#"}>Chemical Research</NavLink></li>
                                                <li><NavLink to="/services">Agricultural Automation</NavLink></li>
                                                <li><NavLink to="/services">Mechanical Engineering</NavLink></li>
                                            </ul>
                                        </div>
                                        <div className="service-side-btn m-b30 site-bg-primary text-white p-a20 d-none">
                                            <h4 className="wt-title m-b20">Brochures</h4>
                                            <p>View our 2021 financial prospectus brochure for an easy to read guide on all of the services offer.</p>
                                            <div className="wt-icon-box-wraper left ">
                                                <NavLink to={"#"} className="btn-block  p-a10 m-tb5">
                                                    <span className="text-black m-r10"><i className="fa fa-file-pdf-o" /></span>
                                                    <strong className="text-black">Download .PDF</strong>
                                                </NavLink>
                                            </div>
                                            <div className="wt-icon-box-wraper left">
                                                <NavLink to={"#"} className="btn-block  p-a10 m-tb5">
                                                    <span className="text-black m-r10"><i className="fa fa-file-word-o" /></span>
                                                    <strong className="text-black"> Download .DOC</strong>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-12">
                                        <div className="section-content service-full-info">
                                            <div className="services-etc m-b30">
                                                <div className="wt-media m-b30">
                                                    <img src={require('./../../assets/images/services/1.jpg').default} alt="" />
                                                </div>
                                                <div className="text-left">
                                                    <h4 className="wt-title m-b20">Chemical Research</h4>
                                                </div>
                                                <p>Engineering is concerned with the development, improvement, and implementation of inte grated systems of people, money, knowledge, information, equipment, energy, materials, analysis and synthesis, as well as the mathematical, physical and social sciences together with the principles and methods of engineering design to specify, predict, and evaluate the results to be obtained from such systems or processes.</p>
                                                <div className="wt-info">
                                                    <p>Concerned with the development, improvement, and implementation of integrated system of people, money, knowledge, information, equipment, energy, materials, analysis and syn thesis, as well as the mathematical, physical and social sciences together with the principle and methods of engineering design to specify, predict, and evaluate the results to be obtained from such systems or processes.</p>
                                                    <div className="row">
                                                        <div className="col-md-4 col-lg-4 m-b30"><img src={require('./../../assets/images/services/s/1.jpg').default} alt="" /></div>
                                                        <div className="col-md-4 col-lg-4 m-b30"><img src={require('./../../assets/images/services/s/2.jpg').default} alt="" /></div>
                                                        <div className="col-md-4 col-lg-4 m-b30"><img src={require('./../../assets/images/services/s/3.jpg').default} alt="" /></div>
                                                    </div>
                                                    <blockquote className="m-b30 site-bg-black p-a50">
                                                        <i className="fa fa-quote-left font-20" />
                                                        <p>Raising a heavy fur muff that covered the whole of her lower arm towards the viewer gregor then turned to look out
                </p>
                                                        <div className="p-t15 text-uppercase">
                                                            <strong>_William Jomurray</strong>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                            <div className="service-provide p-a30  site-bg-gray-light">
                                                <h4 className="wt-title m-b20">Why Choose Us?</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="wt-media">
                                                            <img src={require('./../../assets/images/services/s/4.jpg').default} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-angle-right">
                                                            <li>100% Satisfaction Guarantee.</li>
                                                            <li> Accurate Testing Processes.</li>
                                                            <li> 35+ Years Of Experience.</li>
                                                            <li> Strong Building Materials.</li>
                                                            <li>Eco-Friendly Build Materials.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </>
        );
    };
};

export default ServiceDetails;