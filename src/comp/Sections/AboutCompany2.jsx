import React from 'react';
import { NavLink } from 'react-router-dom';

const aboutdata = [
    {
        image: require('./../../assets/images/transport/about/1.jpg'),
        title: 'Road Fright',
    },
    {
        image: require('./../../assets/images/transport/about/2.jpg'),
        title: 'Warehouses',
    },
    {
        image: require('./../../assets/images/transport/about/3.jpg'),
        title: 'Air Fright',
    }
]

class AboutCompany2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120 p-b90 half-section-outer">
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content clearfix">
                            <div className="half-section">
                                <div className="row justify-content-center">
                                    {aboutdata.map((item, index) => (
                                        <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
                                            <div className="wt-box m-b30">
                                                <div className="wt-media  hover-box-style-1">
                                                    <img src={item.image.default} alt="" />
                                                    <div className="hover-box-content">
                                                        <div className="wt-icon-box-wraper center site-bg-primary white">
                                                            <div className="icon-content">
                                                                <h4 className="wt-tilte m-b10">{item.title}</h4>
                                                                <p>Nunc aliquet nulla nec dapibus max imus. Nam aliquam neque.</p>
                                                                <NavLink to={""} className="site-button-link">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default AboutCompany2;