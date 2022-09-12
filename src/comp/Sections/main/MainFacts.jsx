import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/css/modal-video.min.css';

var img1 = require('./../../../assets/images/BuildFuture.jpg');

class MainFacts extends React.Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <>
                <div className="section-full p-b90 site-bg-primary">
                    <div className="container">
                        <div className="section-content">
                            <div className="c-section-two">
                                {/* <div className="counter-block-half">
                                    <div className="row justify-content-center d-flex no-gutters">
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="wt-icon-box-wraper left">
                                                <span className="icon-md p-t10">
                                                    <i className="flaticon-worker" />
                                                </span>
                                                <div className="icon-content">
                                                    <div className="m-b5"><span className="counter"><CountUp end={808} duration={5} /></span></div>
                                                    <div className="icon-content-info">Skilled Contractors</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="wt-icon-box-wraper left">
                                                <span className="icon-md p-t10">
                                                    <i className="flaticon-briefing" />
                                                </span>
                                                <div className="icon-content">
                                                    <div className="m-b5"><span className="counter"><CountUp end={950} duration={5} /></span></div>
                                                    <div className="icon-content-info">Projects Completed</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="wt-icon-box-wraper left">
                                                <span className="icon-md p-t10">
                                                    <i className="flaticon-factory" />
                                                </span>
                                                <div className="icon-content">
                                                    <div className="m-b5"><span className="counter"><CountUp end={560} duration={5} /></span></div>
                                                    <div className="icon-content-info">Industries Served</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="wt-icon-box-wraper left ">
                                                <span className="icon-md p-t10">
                                                    <i className="flaticon-reliability" />
                                                </span>
                                                <div className="icon-content">
                                                    <div className="m-b5"><span className="counter"><CountUp end={996} duration={5} /></span></div>
                                                    <div className="icon-content-info">Trusted By</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="video-with-content m-b30">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-12">
                                            <div className="video-left-content">
                                                <h3 className="wt-title site-text-white">
                                                    We believe in building long lasting our business relationships.</h3>
                                                <p>+971 588725957</p>
                                                <p>business.global@suralpadi.com</p>
                                                <i className="flaticon-customer-service" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <div className="video-section-two overlay-wraper bg-cover" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                                                <div className="overlay-main site-bg-black opacity-07" />
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='X9MGcOeeybc' onClose={() => this.setState({ isOpen: false })} />
                                                <NavLink to={"#"} className="play-now-video" onClick={this.openModal}>
                                                    <i className="icon fa fa-play" />
                                                    <span className="ripple" />
                                                </NavLink>
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

export default MainFacts;