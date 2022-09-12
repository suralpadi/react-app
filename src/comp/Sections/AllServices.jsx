import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        title: 'Chemical Research Industry',
        icon: 'flaticon-physics'
    },
    {
        title: 'Construction & Engineering',
        icon: 'flaticon-graphic-tool'
    },
    {
        title: 'Petroleum & Gas Engineering',
        icon: 'flaticon-gas-station'
    },
    {
        title: 'Mechanical Engineering',
        icon: 'flaticon-work-time'
    },
    {
        title: 'Oil & gas Engineering',
        icon: 'flaticon-oil'
    },
    {
        title: 'Automotive Manufacturing',
        icon: 'flaticon-car-parts'
    }
]

var img1 = require('./../../assets/images/background/map-bg-dark2.png');

class AllServices extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120  p-b90" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Our Services</div>
                            </div>
                            <h2 className="wt-title">We Provide Best Services</h2>
                        </div>
                        <div className="s-section">
                            <div className="row">
                                {services.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 m-b30" key={index}>
                                        <div className="service-icon-box-two">
                                            <div className="wt-icon-box-wraper">
                                                <div className="icon-xl inline-icon">
                                                    <span className="icon-cell site-text-primary"><i className={item.icon} /></span>
                                                </div>
                                            </div>
                                            <div className="service-icon-box-title">
                                                <h4 className="wt-title"><NavLink to="/service-details">{item.title}</NavLink></h4>
                                            </div>
                                            <div className="service-icon-box-content">
                                                <p>You can dream, create, design, and build the most wonderful place in the world. But it requires people.</p>
                                                <NavLink to="/service-details" className="site-button-link site-text-primary">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
};

export default AllServices;