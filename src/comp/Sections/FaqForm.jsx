import React from 'react';

class FaqForm extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120 p-b90 site-bg-gray-light">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Tell Us Now</div>
                            </div>
                            <h2>If you have any Question in your mind</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content">
                            <div className="row justify-content-center d-flex">
                                <div className="col-lg-7 col-md-12 m-b30">
                                    <div className="faq-help-form-outer">
                                        <div className="faq-help-form">
                                            <div className="form-group">
                                                <input type="text" placeholder="Enter your name" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" placeholder="Enter your email" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Enter your message" defaultValue={""} />
                                            </div>
                                            <div>
                                                <button type="submit" className="site-button sb-bdr-dark">Submit Now</button>
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

export default FaqForm;