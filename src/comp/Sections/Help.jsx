import React from 'react';

class Help extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t0 p-b0">
                    <div className="container">
                        <div className="help-blocks">
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

export default Help;