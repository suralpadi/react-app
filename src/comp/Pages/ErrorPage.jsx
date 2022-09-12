import React from 'react';
import { NavLink } from 'react-router-dom';

class ErrorPage extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <div className="section-full page-notfound-outer">
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="page-notfound">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="page-notfound-content">
                                                <h3 className="error-title">Error</h3>
                                                <strong>404</strong>
                                                <h3 className="error-comment">Oops! Looks like the page is gone.</h3>
                                                <p>The page you are looking for might have been removed had its name changed
                or is temporarily unavailable </p>
                                                <NavLink to={""} className="site-button sb-bdr-dark">Back to Home</NavLink>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="page-notfound-media text-right">
                                                <img src={require("./../../assets/images/error-bg.png").default} alt="" />
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
    };
};

export default ErrorPage;