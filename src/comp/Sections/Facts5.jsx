import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

class Facts5 extends React.Component {
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
                <div className="section-full p-t120 p-b90 site-bg-gray-light">
                    <div className="container">
                        <div className="section-content c-section-four">
                            <div className="video-section-four m-b30">
                                <img src={require('./../../assets/images/transport/video.jpg').default} alt="" />
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='c1XNqw2gSbU' onClose={() => this.setState({ isOpen: false })} />
                                <NavLink to={"#"} className="play-now-video" onClick={this.openModal}>
                                    <i className="icon fa fa-play" />
                                    <span className="ripple" />
                                </NavLink>
                            </div>
                            <div className="row justify-content-center d-flex">
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                    <div className="wt-icon-box-wraper left  site-bg-gray">
                                        <span className="icon-md p-t10">
                                            <i className="flaticon-worker" />
                                        </span>
                                        <div className="icon-content">
                                            <div className="m-b5 site-text-primary"><span className="counter"><CountUp end={808} duration={5} /></span></div>
                                            <div className="icon-content-info">Contractors</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                    <div className="wt-icon-box-wraper left site-bg-white">
                                        <span className="icon-md p-t10">
                                            <i className="flaticon-briefing" />
                                        </span>
                                        <div className="icon-content">
                                            <div className="m-b5 site-text-primary"><span className="counter"><CountUp end={950} duration={5} /></span></div>
                                            <div className="icon-content-info">Projects Done!</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                    <div className="wt-icon-box-wraper left site-bg-gray">
                                        <span className="icon-md p-t10">
                                            <i className="flaticon-factory" />
                                        </span>
                                        <div className="icon-content">
                                            <div className="m-b5 site-text-primary"><span className="counter"><CountUp end={560} duration={5} /></span></div>
                                            <div className="icon-content-info">Industries Served</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                    <div className="wt-icon-box-wraper left site-bg-white">
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

export default Facts5;