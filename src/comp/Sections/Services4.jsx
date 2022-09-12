import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        image: require('./../../assets/images/transport/project2/1.jpg'),
        title: 'Ground Delivery',
    },
    {
        image: require('./../../assets/images/transport/project2/2.jpg'),
        title: 'Air Delivery',
    },
    {
        image: require('./../../assets/images/transport/project2/3.jpg'),
        title: 'Sea Delivery',
    },
    {
        image: require('./../../assets/images/transport/project2/4.jpg'),
        title: 'Packaging & Storage',
    }
]

var img1 = require('./../../assets/images/background/bg-dott3.png');

class Services4 extends React.Component {
    render() {
        const options = {
            loop: true,
            nav: false,
            dots: true,
            margin: 20,
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
                                                <div>Our Services</div>
                                            </div>
                                            <h2 className="wt-title">Moving Your Products Across All Borders</h2>
                                        </div>
                                        {/* TITLE END*/}
                                    </div>
                                    <div className="col-lg-6 col-md-12 wt-separator-two-part-right">
                                        <p className="p_discription">Our event unites athletic professionals and enthusiasts to pursue a great goal. We
                                        create and promote initiatives that enable people to become and remain physically
                  active regardless and challenge inequality of access to physical activity.</p>
                                        <NavLink to="/services" className="site-button-secondry sb-bdr-light">Learn More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="half-section-bottom">
                        <div className="container">
                            <div className="section-content">
                                <OwlCarousel className="owl-carousel service-slider-two m-b30 owl-loaded owl-drag" {...options}>
                                    {services.map((item, index) => (
                                        <div className="item" key={index}>
                                            <div className="project-box-style1">
                                                <div className="project-content">
                                                    <h4 className="project-title-large"><NavLink to="/service-details">{item.title}</NavLink></h4>
                                                </div>
                                                <div className="project-media">
                                                    <img src={item.image.default} alt="" />
                                                </div>
                                                <div className="project-view">
                                                    <a className="elem pic-long project-view-btn" href={item.image.default} data-lcl-txt={item.title} data-lcl-author="someone" data-lcl-thumb={item.image.default}>
                                                        <i />
                                                    </a>
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

export default Services4;