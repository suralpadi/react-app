import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var img1 = require('./../../assets/images/construction/background/bg1.jpg');
var img2 = require('./../../assets/images/construction/some-facts.jpg');

class Facts4 extends React.Component {
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
                <div className="section-full p-t120 p-b90 bg-cover" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        <div className="section-content c-section-four">
                            <div className="row justify-content-center d-flex align-items-center">
                                <div className="col-lg-6 col-md-12 m-b30">
                                    <div className="video-section-three overlay-wraper bg-cover" style={{ backgroundImage: 'url(' + img2.default + ')' }}>
                                        <div className="overlay-main site-bg-black opacity-07" />
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='c1XNqw2gSbU' onClose={() => this.setState({ isOpen: false })} />
                                        <NavLink to={"#"} className="play-now-video" onClick={this.openModal}>
                                            <i className="icon fa fa-play" />
                                            <span className="ripple" />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 m-b30">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>Some Facts</div>
                                        </div>
                                        <h2 className="wt-title">Ready to Bring Bigger, Better, Faster &amp; Stronger Projects Than Ever!!</h2>
                                    </div>
                                    {/* TITLE END*/}
                                    <div className="p-t30">
                                        <NavLink to="/about" className="site-button sb-bdr-dark">Learn More</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center d-flex no-gutters m-b30">
                                <div className="col-lg-3 col-md-6 col-sm-6 site-bg-white">
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
                                <div className="col-lg-3 col-md-6 col-sm-6 site-bg-white">
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
                                <div className="col-lg-3 col-md-6 col-sm-6 site-bg-white">
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
                                <div className="col-lg-3 col-md-6 col-sm-6 site-bg-white">
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
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Facts4;