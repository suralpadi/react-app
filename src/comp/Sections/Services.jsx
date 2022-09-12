import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
    },
    {
        title: 'Civil & Art Engineering',
        icon: 'flaticon-helmet'
    },
    {
        title: 'Agricultural Automation',
        icon: 'flaticon-plant'
    }
]

var img1 = require('./../../assets/images/background/bg-dott3.png');

class Services extends React.Component {
    render() {
        const options = {
            loop: true,
            nav: false,
            dots: true,
            margin: 1,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1000: {
                    items: 3
                }
            }
        };
        return (
            <>
                <div className="section-full half-section-outer-1  bg-white">
                    <div className="half-section-top p-t120 site-bg-primary" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                        <div className="container">
                            <div className="wt-separator-two-part when-bg-dark">
                                <div className="row wt-separator-two-part-row">
                                    <div className="col-lg-6 col-md-12 wt-separator-two-part-left">
                                        {/* TITLE START*/}
                                        <div className="section-head left wt-small-separator-outer">
                                            <div className="wt-small-separator">
                                                <div className="sep-leaf-left" />
                                                <div>Services</div>
                                            </div>
                                            <h2 className="wt-title">Best A Grade
                                            Commercial &amp;
                                            Residential
                    Services</h2>
                                        </div>
                                        {/* TITLE END*/}
                                    </div>
                                    <div className="col-lg-6 col-md-12 wt-separator-two-part-right">
                                        <p className="p_discription">Our event unites athletic professionals and enthusiasts to pursue a great goal. We
                                        create and promote initiatives that enable people to become and remain physically
                  active regardless and challenge inequality of access to physical activity.</p>
                                        <NavLink to="/service-details" className="site-button-secondry sb-bdr-light">Learn More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="half-section-bottom">
                        <div className="container">
                            <div className="section-content">
                                <OwlCarousel className="owl-carousel service-slider-one m-b30 owl-loaded owl-drag" {...options}>
                                    {services.map((item, index) => (
                                        <div className="item" key={index}>
                                            <div className="service-icon-box-one bg-white">
                                                <div className="wt-icon-box-wraper">
                                                    <div className="icon-xl inline-icon">
                                                        <span className="icon-cell site-text-primary"><i className={item.icon} /></span>
                                                    </div>
                                                </div>
                                                <div className="service-icon-box-title">
                                                    <h4 className="wt-title"><NavLink to="/service-details">{item.title}</NavLink></h4>
                                                </div>
                                                <div className="service-icon-box-content">
                                                    <p>Given the increasing complexity of
                                                    many construction projects it is
                                                    becoming  more common that a
                      consultant.</p>
                                                    <NavLink to="/service-details" className="site-button-link site-text-primary">Read More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services;