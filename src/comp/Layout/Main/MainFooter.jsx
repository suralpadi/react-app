import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../../Sections/Switcher';

var bgimage = require('../../../assets/images/background/footer-map.png');
const d = new Date();
const year = d.getFullYear();
class MainFooter extends React.Component {
    render() {
        return (
            <>
                <footer className="site-footer footer-dark">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top bg-bottom-center bg-no-repeat" style={{ backgroundImage: 'url(' + bgimage.default + ')' }} >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_about">
                                        <h3 className="widget-title">About Us</h3>
                                        <p>Suralpadi Group of Companies.
                                            No one can deny the contribution of Industrial revolution to the modernism era we are living in. Without machinery and improved technology, our lives will have been more complex and tangled. Machines simplify manpower to a great extent. Similarly, our team of experts will help you to save tons of manpower, resources by automating repetitive processes.
                                        </p>
                                        <ul className="social-icons">
                                            <li><a rel="noreferrer" target="_blank" href={"https://www.facebook.com/Suralpadi"}><i className="fa fa-facebook"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href={"https://twitter.com/Suralpadi_group"}><i className="fa fa-twitter"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href={"https://www.linkedin.com/in/suralpadi-group-401085226/"}><i className="fa fa-linkedin"></i> </a></li>
                                            <li><a rel="noreferrer" target="_blank" href={"https://in.pinterest.com/suralpadi/_created/"}><i className="fa fa-pinterest"></i> </a></li>
                                            <li><a rel="noreferrer" target="_blank" href={"https://www.instagram.com/suralpadi_group/?hl=en"}><i className="fa fa-instagram"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href={"https://youtube.com/channel/UC2mZYFUcP0AY_kCjT7j006A"}><i className="fa fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services">
                                        <h3 className="widget-title">Services</h3>
                                        <ul>
                                            <li><NavLink to={"/metrology-solutions"}>Metrology Solutions</NavLink></li>
                                            <li><NavLink to={"/rapid-prototyping-solutions"}>Rapid Prototyping Solutions</NavLink></li>
                                            <li><NavLink to={"/machining-solution"}>Machining Solutions</NavLink></li>
                                            <li><NavLink to={"/turnkey-solutions"}>Turnkey Solutions</NavLink></li>
                                            <li><NavLink to={"/consultancy-solutions"}>Consultancy Solutions</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services">
                                        <h3 className="widget-title">Company Links</h3>
                                        <ul>
                                            <li><NavLink to="/about">About</NavLink></li>
                                            {/* <li><NavLink to="/services">services</NavLink></li>
                                            <li><NavLink to="/news">News</NavLink></li>
                                            <li><NavLink to="/faq">FAQ</NavLink></li> */}
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
                                                    <p>+971 588725957</p>
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
                                                    <p>business.global@suralpadi.com</p>
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
                                    <div className="copyrights-text">Copyright © {year} by  Suralpadi Group | All rights reserved | Powered by <a href="https://www.digitaldecode.in" rel="noreferrer" target="_blank" className="site-text-primary">Digital Decode</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher />

            </>
        );
    };
};

export default MainFooter;