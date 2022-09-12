import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../../../Sections/Banner';
import { Link } from 'react-scroll';
import { ServicesBanner } from '../../../../assets/images';
class TurnkeySolutions extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <Banner BannerBg={ServicesBanner} title="Turnkey solutions" />
                    <div className="section-full p-t120 p-b90 bg-white">
                        <div className="section-content">
                            <div className="container">
                                <div className="row">
                                    {/* <div className="col-lg-3 col-md-12 rightSidebar">
                                        <div className="all_services m-b30">
                                            <ul>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="TurnkeySolutions">Turnkey solutions</Link></li>
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
                                                    <h4 className="wt-title m-b20 site-text-primary">Turnkey Solutions</h4>
                                                </div>
                                                <div className="wt-media m-b30">
                                                    <img src={require('../../../../assets/images/metrology_solution/trunkey_solution.jpg').default} alt="" />
                                                </div>
                                                <p>We offer an end-to-end solution to its customers. The company has the infrastructure and capability to take on projects involving SETTING UP complete production lines of large, complex structures and assemblies.</p>
                                                <p> The scope of service includes:</p>
                                            </div>
                                            <div className="service-provide" id="TurnkeySolutions">
                                                {/* <div className="row">
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/services/s/1.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/services/s/2.jpg').default} alt="" /></div>
                                                </div> */}
                                                <p>
                                                    <ul className="list-angle-right">
                                                    <li>Designing</li>
                                                    <li>Sourcing</li>
                                                    <li>Manufacturing</li>
                                                    <li>Special treatment /processing of materials Coatings</li>
                                                    <li>Factory Acceptance Test (FAT)</li>
                                                    </ul>

                                                </p>
                                                <p>Turnkey projects undertaken range from large material handling equipment to multiplex gearboxes and everything in between.</p>
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

export default TurnkeySolutions;