import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        title: 'Metrology Solutions',
        content:'Metrology is the department that specializes in measuring the exact dimension of a product. It is very crucial to know a product’s exact dimension.',
        icon: 'flaticon-graphic-tool',
        link: '/metrology-solutions'
    },
    {
        title: 'Rapid Prototyping Solutions',
        content:'Rapid Prototyping of physical objects from 3D digital models for customers across the globe using the 3D model received from customers',
        icon: 'flaticon-work-time',
        link: '/rapid-prototyping-solutions'
    },
    {
        title: 'Machining Solution',
        content:'Highly equipped with a wide range of high precision CNC machines to meet the never-ending engineering needs of its customers.',
        icon: 'flaticon-car-parts',
        link:'/machining-solution'
    },
    {
    title: 'Turnkey Solutions',
    content:'We offer an end-to-end solution to its customers. The company has the infrastructure and capability to take on projects involving SETTING UP complete production.',
    icon: 'flaticon-briefing',
    link: '/turnkey-solutions'
    },
    {
        title: 'Consultancy Solutions',
        content:'our business mode of providing an "end-to-end" business solution ensures that the company stays with the client till the mutual end objective is achieved.',
        icon: 'flaticon-deal',
        link: '/consultancy-solutions'
    }
]

var img1 = require('./../../assets/images/background/map-bg-dark2.png');

class Services2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120  p-b90" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Our Services</div>
                            </div>
                            <h2 className="wt-title">We Provide Best Services</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="s-section m-b30">
                            <div className="row">
                            {services.map((item, index) => (
                                <div className="col-lg-6 col-md-6 m-b30" key={index}>
                                    <div className="service-icon-box-two">
                                        <div className="wt-icon-box-wraper">
                                            <div className="icon-xl inline-icon">
                                                <span className="icon-cell site-text-primary"><i className={item.icon} /></span>
                                            </div>
                                        </div>
                                        <div className="service-icon-box-title">
                                            <h4 className="wt-title"><NavLink to={item.link}>{item.title}</NavLink></h4>
                                        </div>
                                        <div className="service-icon-box-content">
                                            <p>{item.content}</p>
                                            <NavLink to={item.link} className="site-button-link site-text-primary">Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                                    ))}
                            </div>
                            {/* <div className="text-center">
                            <NavLink to="/services" className="site-button sb-bdr-dark">Explore All Services</NavLink>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services2;