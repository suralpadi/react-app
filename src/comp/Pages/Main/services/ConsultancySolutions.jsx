import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../../../Sections/Banner';
import { Link } from 'react-scroll'
import { ServicesBanner } from '../../../../assets/images';

class ConsultancySolutions extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <Banner BannerBg={ServicesBanner} title="Consultancy Solutions" />
                    <div className="section-full p-t120 p-b90 bg-white">
                        <div className="section-content">
                            <div className="container">
                                <div className="row">
                                    {/* <div className="col-lg-3 col-md-12 rightSidebar">
                                        <div className="all_services m-b30">
                                            <ul>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="ConsultingServices">Reverse Engineering - Scan to CAD</Link></li>
                                            </ul>
                                        </div>
                                        <div className="service-side-btn m-b30 site-bg-primary text-white p-a20 d-none">
                                            <h4 className="wt-title m-b20">Brochures</h4>
                                            <p>View our 2021 financial prospectus brochure for an easy to read guide on all of the services offer</p>
                                            <div className="wt-icon-box-wraper left ">
                                                <NavLink to={"#"} className="btn-block  p-a10 m-tb5">
                                                    <span className="text-black m-r10"><i className="fa fa-file-pdf-o" /></span>
                                                    <strong className="text-black">Download .PDF</strong>
                                                </NavLink>
                                            </div>
                                            <div className="wt-icon-box-wraper left">
                                                <NavLink to={"#"} className="btn-block  p-a10 m-tb5">
                                                    <span className="text-black m-r10"><i className="fa fa-file-word-o" /></span>
                                                    <strong className="text-black"> Download .DOC</strong>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12 col-md-12">
                                        <div className="section-content service-full-info">
                                            <div className="services-etc m-b30">
                                                <div className="text-left">
                                                    <h4 className="wt-title m-b20 site-text-primary">Consultancy Solution</h4>
                                                </div>
                                                <div className="wt-media m-b30">
                                                    <img src={require('../../../../assets/images/metrology_solution/consultancy_services-1.jpg').default} alt="" />
                                                </div>
                                                <p>We have <strong>a unique business model</strong> that incorporates a holistic approach,
                                                    keeping in mind the overall client requirements. While most advisory firms fall short on
                                                    seeing through on their strategy or having any skin in the game, our business mode of
                                                    providing <strong>an “end-to-end” business solution</strong> ensures that the company stays with
                                                    the client till the mutual end objective is achieved.
                                                </p>
                                                <p>While the end-to-end service offering is applicable to most companies
                                                    operating within the Engineering industry, it is especially beneficial to companies such
                                                    as equipment suppliers and contractors looking for additional support post the research
                                                    and advisory services.
                                                </p>
                                                <p>Through our company’s dedicated research, advisory and Business
                                                    development teams, the client is able <strong>to access varied pools of knowledge and
                                                    service expertise </strong> to maximize the company’s potential and opportunities available
                                                    within the market.
                                                </p>
                                            </div>
                                            <div className="service-provide" id="ConsultingServices">
                                                <div className="row" style={{display:"none"}}>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/services/s/1.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/services/s/2.jpg').default} alt="" /></div>
                                                </div>
                                                <h5>Consulting services focus on four areas:    </h5>
                                                <p>
                                                    <ul className="list-angle-right">
                                                        <li>Project Life Cycle Support</li>
                                                        <li>Market Entry and Growth Advisory</li>
                                                        <li>Contract Management Services</li>
                                                        <li>Design and Engineering Services</li>
                                                        <li>Complete Setup of Manufacturing Facilities / Factories</li>
                                                    </ul>

                                                </p>
                                            </div>
                                            {/* service end */}
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

export default ConsultancySolutions;