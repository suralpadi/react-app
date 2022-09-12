import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Sections/Switcher';

var bgimage = require('./../../assets/images/background/footer-map.png');

class Footer2 extends React.Component {
    render() {
        return (
            <>
                <footer className="site-footer footer-light">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top bg-bottom-center bg-no-repeat" style={{ backgroundImage: 'url('+bgimage.default+')' }} >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_about">
                                        <h3 className="widget-title">About Us</h3>
                                        <p>We are the leaders in the building
                                        construction and factories. We’re around
                                        over the worldwide. We never give up
              on the challenges</p>
                                        <ul className="social-icons">
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                            <li><NavLink to={"#"} className="fa fa-linkedin" /></li>
                                            <li><NavLink to={"#"} className="fa fa-pinterest" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services">
                                        <h3 className="widget-title">Services</h3>
                                        <ul>
                                            <li><NavLink to="/service-details">Construction Engineering</NavLink></li>
                                            <li><NavLink to="/service-details">Oil &amp; Gas Refinery</NavLink></li>
                                            <li><NavLink to="/service-details">Mechanical Engineering</NavLink></li>
                                            <li><NavLink to="/service-details">Chemical Research</NavLink></li>
                                            <li><NavLink to="/service-details">Civil Engineering </NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services">
                                        <h3 className="widget-title">Company Links</h3>
                                        <ul>
                                            <li><NavLink to="/about">About</NavLink></li>
                                            <li><NavLink to="/projects">Projects</NavLink></li>
                                            <li><NavLink to="/blog-grid">Blog</NavLink></li>
                                            <li><NavLink to="/faq">FAQ</NavLink></li>
                                            <li><NavLink to="/contact">Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_newsletter">
                                        <h3 className="widget-title">Newsletter</h3>
                                        <p>Our newsletters contain useful blog
                                        posts, case studies, “how to”s, and ways
              to help you grow your business. </p>
                                        <div className="newsletter-bx">
                                            <form role="search">
                                                <div className="input-group">
                                                    <input name="news-letter" className="form-control" required="" placeholder="Enter Email Address" type="email" />
                                                    <span className="input-group-btn">
                                                        <button type="submit" className="site-button"><i className="fa fa-paper-plane" /></button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_blocks">
                                <div className="row justify-content-center no-gutters">
                                    {/*Block 1*/}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="block-content">
                                            <div className="wt-icon-box-wraper left">
                                                <div className="wt-icon-box-sm">
                                                    <span className="icon-cell  site-text-primary"><i className="flaticon-call" /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="wt-tilte">Call</h4>
                                                    <p>+(02) 0111-7457-354</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Block 2*/}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="block-content">
                                            <div className="wt-icon-box-wraper left">
                                                <div className="wt-icon-box-sm">
                                                    <span className="icon-cell  site-text-primary"><i className="flaticon-email" /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="wt-tilte">Email</h4>
                                                    <p>demomax@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Block 3*/}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="block-content">
                                            <div className="wt-icon-box-wraper left">
                                                <div className="wt-icon-box-sm">
                                                    <span className="icon-cell site-text-primary"><i className="flaticon-location" /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="wt-tilte">Address</h4>
                                                    <p>280, Taweelah, Abu Dhabi, United Arab Emirates, P.O.Box - 137863</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="footer-bottom-info">
                                <div className="footer-copy-right">
                                    <span className="copyrights-text">Copyright © 2021 by <span className="site-text-primary">Thewebmax</span> | All rights reserved </span>                      </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher/>

            </>
        );
    };
};

export default Footer2;