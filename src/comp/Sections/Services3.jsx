import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        image: require('./../../assets/images/agriculture/service/m1.jpg'),
        title: 'Lawn Cleaning',
    },
    {
        image: require('./../../assets/images/agriculture/service/m2.jpg'),
        title: 'Planting Tree',
    },
    {
        image: require('./../../assets/images/agriculture/service/m3.jpg'),
        title: 'Garden Care',
    },
    {
        image: require('./../../assets/images/agriculture/service/m4.jpg'),
        title: 'Leaf Cutting',
    }
]

class Services3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120  p-b90 site-bg-gray-light">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Decision For Nature</div>
                            </div>
                            <h2 className="wt-title">We Provide Best Services</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="s-section-two m-b30">
                            <div className="row">
                                {services.map((item, index) => (
                                    <div className="col-lg-3 col-md-6 m-b30" key={index}>
                                        <div className="service-box-three">
                                            <div className="service-box-title">
                                                <h4 className="wt-title">{item.title}</h4>
                                            </div>
                                            <div className="service-box-content">
                                                <p>You can dream, create, design, and build the most wonderful place.</p>
                                            </div>
                                            <div className="service-box-media">
                                                <img src={item.image.default} alt="" />
                                            </div>
                                            <NavLink to="/service-details" className="site-button-round site-bg-primary"><i className="fa fa-angle-right" /></NavLink>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center">
                                <NavLink to="/service-details" className="site-button sb-bdr-dark">View all Services</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services3;