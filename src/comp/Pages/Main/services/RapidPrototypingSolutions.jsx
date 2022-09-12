import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../../../Sections/Banner';
import { Link } from 'react-scroll'
import { ServicesBanner } from '../../../../assets/images';

class RapidPrototypingSolutions extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <Banner BannerBg={ServicesBanner} title="Rapid Prototyping Solutions" />
                    <div className="section-full p-t120 p-b90 bg-white">
                        <div className="section-content">
                            <div className="container">
                                <div className="row">
                                    {/* <div className="col-lg-3 col-md-12 rightSidebar">
                                        <div className="all_services m-b30">
                                            <ul>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="RapidPrototyping">Reverse Engineering - Scan to CAD</Link></li>
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
                                                    <h4 className="wt-title m-b20 site-text-primary">Rapid Prototyping Solutions</h4>
                                                </div>
                                                <div className="wt-media m-b30">
                                                    <img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsRapitPrototypiing.jpg').default} alt="" />
                                                </div>
                                                <p>These high-precision tools can get the job done within an eye blink and comparatively the cost is also significantly lesser than traditional methods.</p>
                                            </div>
                                            <div className="service-provide" id="RapidPrototyping">
                                                <h4 className="wt-title m-b20 site-text-primary">Reverse Engineering - Scan to CAD</h4>
                                                {/* <div className="row" style={{display:"none"}}>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/imagesMetrologySolutionsRapitPrototypiing.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/imagesMetrologySolutionsRapitPrototypiing.jpg').default} alt="" /></div>
                                                </div> */}
                                                <p>
                                                    <ul className="list-angle-right">
                                                        <li>Rapid Prototyping of physical objects from 3D digital models</li>
                                                        <li>Perform 3D printing of parts for customers across the globe using the 3D model (stl, stp, iges data) received from customers.</li>
                                                        <li>Cost effective Printing with best quality</li>
                                                        <li>Methods adopted – SLS, SLA, FDM etc. </li>
                                                        <li>Materials: Nylon, ABS, Metals,Custom materials (as per customer request) etc.</li>
                                                    </ul>

                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <h4>Deliverables</h4>
                                                        <ul className="list-angle-right">
                                                            <li>3D CAD Models (Surface / Solid)</li>
                                                            <li>2D Engineering drawings</li>
                                                            <li>Point Cloud data / Scan data</li>
                                                        </ul>
                                                    </div>
                                                </div>
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

export default RapidPrototypingSolutions;