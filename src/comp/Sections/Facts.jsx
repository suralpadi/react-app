import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var img1 = require('./../../assets/images/background/bg10.jpg');
var img2 = require('./../../assets/images/background/bg-2.jpg');

class Facts extends React.Component {

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
                <div className="section-full p-t120 p-b120 bg-cover" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        <div className="section-content">
                            <div className="row justify-content-center d-flex align-items-center">
                                <div className="col-lg-6 col-md-12 m-b30">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer when-bg-dark">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>Some Facts</div>
                                        </div>
                                        <h2 className="wt-title">Expert Workers
                                        Are Giving Best
                                        Services To Build
                                        Your Dream
                                        Factory.
                </h2>
                                    </div>
                                    {/* TITLE END*/}
                                    <div className="p-t30">
                                        <NavLink to="/about" className="site-button sb-bdr-dark">Learn More</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 m-b30">
                                    <div className="c-section-one">
                                        <div className="row justify-content-center d-flex no-gutters">
                                            <div className="col-lg-6 col-md-6 col-sm-6 site-bg-white">
                                                <div className="wt-icon-box-wraper left">
                                                    <span className="icon-md p-t10">
                                                        <i className="flaticon-worker" />
                                                    </span>
                                                    <div className="icon-content">

                                                        <div className="m-b5 site-text-primary"><span className="counter"><CountUp end={808} duration={5} /></span></div>
                                                        <div className="icon-content-info">Contractors</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 site-bg-white">
                                                <div className="wt-icon-box-wraper left">
                                                    <span className="icon-md p-t10">
                                                        <i className="flaticon-briefing" />
                                                    </span>
                                                    <div className="icon-content">
                                                        <div className="m-b5 site-text-primary"><span className="counter"><CountUp end={950} duration={5} /></span></div>
                                                        <div className="icon-content-info">Projects Done!</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 site-bg-white">
                                                <div className="wt-icon-box-wraper left">
                                                    <span className="icon-md p-t10">
                                                        <i className="flaticon-factory" />
                                                    </span>
                                                    <div className="icon-content">
                                                        <div className="m-b5 site-text-primary"><span className="counter"><CountUp end={560} duration={5} /></span></div>
                                                        <div className="icon-content-info">Industries Served</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 site-bg-white">
                                                <div className="wt-icon-box-wraper left ">
                                                    <span className="icon-md p-t10">
                                                        <i className="flaticon-reliability" />
                                                    </span>
                                                    <div className="icon-content">
                                                        <div className="m-b5 site-text-primary"><span className="counter"><CountUp end={996} duration={5} /></span></div>
                                                        <div className="icon-content-info">Trusted By</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="video-section-first overlay-wraper bg-cover" style={{ backgroundImage: 'url(' + img2.default + ')' }}>
                                            <div className="overlay-main site-bg-primary opacity-07" />
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='c1XNqw2gSbU' onClose={() => this.setState({ isOpen: false })} />
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
            </>
        );
    }
};

export default Facts;