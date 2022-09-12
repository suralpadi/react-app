import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const logos = [
    { image: require('./../../../assets/images/client-logo/w1.png') },
    { image: require('./../../../assets/images/client-logo/w2.png') },
    { image: require('./../../../assets/images/client-logo/w3.png') },
    { image: require('./../../../assets/images/client-logo/w4.png') },
    { image: require('./../../../assets/images/client-logo/w5.png') },
    { image: require('./../../../assets/images/client-logo/w6.png') },
    { image: require('./../../../assets/images/client-logo/w1.png') },
    { image: require('./../../../assets/images/client-logo/w2.png') },
    { image: require('./../../../assets/images/client-logo/w3.png') },
    { image: require('./../../../assets/images/client-logo/w4.png') },
    { image: require('./../../../assets/images/client-logo/w5.png') },
    { image: require('./../../../assets/images/client-logo/w6.png') },
    { image: require('./../../../assets/images/client-logo/w1.png') },
    { image: require('./../../../assets/images/client-logo/w2.png') },
    { image: require('./../../../assets/images/client-logo/w3.png') },
    { image: require('./../../../assets/images/client-logo/w4.png') },
    { image: require('./../../../assets/images/client-logo/w5.png') },
    { image: require('./../../../assets/images/client-logo/w6.png') },
]

var img1 = require('./../../../assets/images/background/bg11.jpg');

class MainClientLogos extends React.Component {
    render() {
        const options = {
            loop: true,
            nav: false,
            dots: true,
            margin: 5,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                1000: {
                    items: 6
                }
            }
        };
        return (
            <>
                <div className="section-full site-bg-gray-light p-t120 p-b90 bg-cover" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container home-client-outer">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Our Clients</div>
                            </div>
                            <h2>A Few of Our Clients</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content">
                            <OwlCarousel className="owl-carousel home-client-carousel owl-btn-vertical-center owl-loaded owl-drag" {...options}>
                                {logos.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <NavLink to={""}><img src={item.image.default} alt="" /></NavLink></div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="container">
                        <div className="help-blocks m-t50 m-b30">
                            <div className="row justify-content-center no-gutters">
                                {/*Block 1*/}
                                <div className="col-lg-4 col-md-6 site-bg-primary">
                                    <div className="help-block-content  white">
                                        <div className="wt-icon-box-wraper left">
                                            <div className="wt-icon-box-sm">
                                                <span className="icon-cell site-bg-dark"><i className="flaticon-lightbulb" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte">Creative Ideas</h4>
                                                <p>Train with the best experts in bodybuilding field.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Block 2*/}
                                <div className="col-lg-4 col-md-6 site-bg-gray">
                                    <div className="help-block-content ">
                                        <div className="wt-icon-box-wraper left">
                                            <div className="wt-icon-box-sm">
                                                <span className="icon-cell site-bg-dark"><i className="flaticon-customer-service" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte">24/7 Support</h4>
                                                <p>Train with the best experts in bodybuilding field.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Block 3*/}
                                <div className="col-lg-4 col-md-6  site-bg-black">
                                    <div className="help-block-content white">
                                        <div className="wt-icon-box-wraper left">
                                            <div className="wt-icon-box-sm">
                                                <span className="icon-cell site-bg-dark"><i className="flaticon-antivirus" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte">Super Safety</h4>
                                                <p>Train with the best experts in bodybuilding field.</p>
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

export default MainClientLogos;