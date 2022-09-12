import React from 'react';
import CountUp from 'react-countup';

var img1 = require('./../../assets/images/agriculture/background/bg1.jpg');
var img2 = require('./../../assets/images/agriculture/leaf-border.png');

class Facts3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120 bg-cover c-section-three-wrapper" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        <div className="section-content">
                            <div className="c-section-three">
                                <div className="counter-block-half" style={{ backgroundImage: 'url(' + img2.default + ')' }}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="wt-icon-box-wraper center">
                                                <span className="icon-md p-t10 m-b20 site-text-primary">
                                                    <i className="flaticon-farmer" />
                                                </span>
                                                <div className="icon-content">
                                                    <div className="m-b5"><span className="counter"><CountUp end={808} duration={5} /></span></div>
                                                    <div className="icon-content-info">Team Members</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="wt-icon-box-wraper center">
                                                <span className="icon-md p-t10 m-b20 site-text-primary">
                                                    <i className="flaticon-field" />
                                                </span>
                                                <div className="icon-content">
                                                    <div className="m-b5"><span className="counter"><CountUp end={950} duration={5} /></span></div>
                                                    <div className="icon-content-info">Our Farms</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="wt-icon-box-wraper center">
                                                <span className="icon-md p-t10 m-b20 site-text-primary">
                                                    <i className="flaticon-trophy" />
                                                </span>
                                                <div className="icon-content">
                                                    <div className="m-b5"><span className="counter"><CountUp end={560} duration={5} /></span></div>
                                                    <div className="icon-content-info">Win Awards</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="wt-icon-box-wraper center ">
                                                <span className="icon-md p-t10 m-b20 site-text-primary">
                                                    <i className="flaticon-deal" />
                                                </span>
                                                <div className="icon-content">
                                                    <div className="m-b5"><span className="counter"><CountUp end={996} duration={5} /></span></div>
                                                    <div className="icon-content-info">Gold Partners</div>
                                                </div>
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

export default Facts3;