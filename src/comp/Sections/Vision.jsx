import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../assets/images/background/bg-dott.png');

class Vision extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120  p-b90 site-bg-white" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            {/* COLUMNS 1 */}
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="service-icon-box-two text-center bg-white">
                                    <div className="wt-icon-box-wraper">
                                        <div className="icon-xl inline-icon">
                                            <span className="icon-cell site-text-primary"><i className="flaticon-briefing" /></span>
                                        </div>
                                    </div>
                                    <div className="service-icon-box-title">
                                        <h4 className="wt-title"><NavLink to={"#"}>Our Mission</NavLink></h4>
                                    </div>
                                    <div className="service-icon-box-content">
                                        <p>You can dream, create, design, and build the most wonderful place in the world. But it requires people.</p>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 2 */}
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="service-icon-box-two text-center site-bg-black">
                                    <div className="wt-icon-box-wraper">
                                        <div className="icon-xl inline-icon">
                                            <span className="icon-cell site-text-primary"><i className="flaticon-lightbulb" /></span>
                                        </div>
                                    </div>
                                    <div className="service-icon-box-title">
                                        <h4 className="wt-title"><NavLink to={"#"}>Our Vision</NavLink></h4>
                                    </div>
                                    <div className="service-icon-box-content">
                                        <p>You can dream, create, design, and build the most wonderful place in the world. But it requires people.</p>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 3 */}
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="service-icon-box-two text-center bg-white">
                                    <div className="wt-icon-box-wraper">
                                        <div className="icon-xl inline-icon">
                                            <span className="icon-cell site-text-primary"><i className="flaticon-worker" /></span>
                                        </div>
                                    </div>
                                    <div className="service-icon-box-title">
                                        <h4 className="wt-title"><NavLink to={"#"}>Our Values</NavLink></h4>
                                    </div>
                                    <div className="service-icon-box-content">
                                        <p>You can dream, create, design, and build the most wonderful place in the world. But it requires people.</p>
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

export default Vision;