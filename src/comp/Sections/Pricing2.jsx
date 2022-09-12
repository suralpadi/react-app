import React from 'react';
import { NavLink } from 'react-router-dom';

class Pricing2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120 p-b90 site-bg-gray-light">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-secondry">
                                <div className="sep-leaf-left" />
                                <div>Pricing</div>
                            </div>
                            <h2>Our Pricing Plan</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content">
                            <div className="pricing-block-outer2">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="pricing-table-2">
                                            <div className="p-table-title">
                                                <h4 className="wt-title">
                                                    Basic Plan
                </h4>
                                            </div>
                                            <div className="p-table-price">
                                                <span>$29.00</span>
                                                <p>/ Month</p>
                                            </div>
                                            <div className="p-table-list">
                                                <ul>
                                                    <li>Concept Project</li>
                                                    <li>Site Planning</li>
                                                    <li>Civil Work</li>
                                                    <li>Hire Contractor</li>
                                                </ul>
                                            </div>
                                            <div className="p-table-btn">
                                                <NavLink to="/about" className="site-button-link black">Purchase Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="pricing-table-2">
                                            <div className="p-table-title">
                                                <h4 className="wt-title">
                                                    Standard Plan
                </h4>
                                            </div>
                                            <div className="p-table-price">
                                                <span>$49.00</span>
                                                <p>/ Month</p>
                                            </div>
                                            <div className="p-table-list">
                                                <ul>
                                                    <li>Concept Project</li>
                                                    <li>Site Planning</li>
                                                    <li>Civil Work</li>
                                                    <li>Hire Contractor</li>
                                                </ul>
                                            </div>
                                            <div className="p-table-btn">
                                                <NavLink to="/about" className="site-button-link black">Purchase Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="pricing-table-2">
                                            <div className="p-table-title">
                                                <h4 className="wt-title">
                                                    Business Plan
                </h4>
                                            </div>
                                            <div className="p-table-price">
                                                <span>$99.00</span>
                                                <p>/ Month</p>
                                            </div>
                                            <div className="p-table-list">
                                                <ul>
                                                    <li>Concept Project</li>
                                                    <li>Site Planning</li>
                                                    <li>Civil Work</li>
                                                    <li>Hire Contractor</li>
                                                </ul>
                                            </div>
                                            <div className="p-table-btn">
                                                <NavLink to="/about" className="site-button-link black">Purchase Now</NavLink>
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

export default Pricing2;