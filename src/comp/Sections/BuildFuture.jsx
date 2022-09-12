import React from 'react';

var img1 = require('./../../assets/images/background/bg12.jpg');

class BuildFuture extends React.Component {
    render() {
        return (
            <>
                <div className="section-full bg-white">
                    <div className="container-fluid future-section-outer ">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 future-section-left bg-cover" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                            </div>
                            <div className="col-xl-6 col-lg-6 future-section-right bg-white">
                                <div className="future-sec-right-content">
                                    <div className="future-right-inner">
                                        <div className="section-head left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div className="sep-leaf-left" />
                                                <div>Build Future</div>
                                            </div>
                                            <h2 className="wt-title">We provide the highest
                                            quality of work that meets
                    your expectations</h2>
                                        </div>
                                        <div className="our-future">
                                            <span className="progressText "><b>Industry</b></span>
                                            <div className="progress">
                                                <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '92%' }} aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} /><span> 80%</span>
                                            </div>
                                            <span className="progressText "><b>Construction</b></span>
                                            <div className="progress">
                                                <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '84%' }} aria-valuenow={84} aria-valuemin={0} aria-valuemax={100} /><span> 90%</span>
                                            </div>
                                            <span className="progressText "><b>Factory</b></span>
                                            <div className="progress">
                                                <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} /><span>95%</span>
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

export default BuildFuture;