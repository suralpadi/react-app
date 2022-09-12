import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../../../Sections/Banner';
import OurProductBanner from '../../../../assets/images/banner/AboutUsBanner.jpg';

class RapidPrototyping extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <Banner BannerBg={OurProductBanner} title={"Rapid Prototyping / 3D Printing"} />
                    <div className="section-full p-t120 p-b120 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="project-single">
                                            <div className="project-single-media m-b30">
                                                <h4 className="wt-tilte site-text-primary">CMM - Bridge type</h4>
                                                <img src={require('../../../../assets/images/products/CMMBridgetype.jpg').default} alt="" />
                                            </div>
                                            <div className="wt-info bg-white">
                                                <p>Rapid Prototyping / 3D Printing</p>
                                                <h5 className="wt-tilte site-text-primary"> Additive Manufacturing – Metals</h5>
                                                <ul className="arrow-list-1">
                                                    <li>Metal 3D Printers by EOS</li>
                                                    <li>Flexible and Cost-Efficient
                                                        Production of High-Quality
                                                        Metal Parts</li>
                                                </ul>
                                            </div>
                                            <div className="wt-info bg-white">
                                                <h5 className="wt-tilte site-text-primary"> Additive Manufacturing - Metals:</h5>
                                                <ul className="arrow-list-1">
                                                    <li>EOS M 100</li>
                                                    <li>EOS M 290</li>
<                                                   li>EOS M 300-4</li>
                                                    <li>EOS M 400</li>
<                                                   li>EOS M 400-4</li>
                                                </ul>
                                            </div>
                                            <div className="wt-info bg-white">
                                                <h5 className="wt-tilte site-text-primary"> EOS Metal Materials:</h5>
                                                <ul className="arrow-list-1">
                                                    <li>Aluminum</li>
                                                    <li>Cobalt Chrome</li>
                                                    <li>Precious Metals</li>
                                                    <li>Stainless Steel</li>
                                                    <li>Tool Steel</li> 
                                                </ul>
                                            </div>
                                            <div className="wt-info bg-white">
                                                <h5 className="wt-tilte site-text-primary"> Additive Manufacturing - Plastic:</h5>
                                                    <ul className="arrow-list-1">
                                                        <li>Plastics 3D Printers by EOS </li>
                                                        <li>Modular 3D printing solutions for the flexible and cost- efficient production of prototypes and end product</li>
                                                </ul>
                                            </div>
                                            <div className="wt-info bg-white">
                                                <h5 className="wt-tilte site-text-primary"> EOS Polymer Systems:</h5>
                                                    <ul className="arrow-list-1">
                                                        <li>FORMIGA P 110 Velocis</li>
                                                        <li>EOS P 396</li>
                                                        <li>EOS P 500</li>
                                                        <li>EOS P 770</li>
                                                        <li>EOS P 810</li>
                                                </ul>
                                            </div>
                                            <div className="wt-info bg-white">
                                                <h5 className="wt-tilte site-text-primary">EOS Polymer Materials:</h5>
                                                    <ul className="arrow-list-1">
                                                        <li>PAEK - Polyaryletherketones</li>
                                                        <li>PA 11 - Nylon</li>
                                                        <li>PA 12 - Polyamide 12</li>
                                                        <li>TPE - Thermoplastic</li>
                                                        <li>Elastomers</li>
                                                        <li>PS - Polystyrene</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 rightSidebar" style={{display:"none"}}>
                                        <div className="project-single-sibar-info m-b30">
                                            <h4 className="wt-tilte">Product Information</h4>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                            <ul className="info-list-1">
                                                <li><h5 className="title">Date :</h5><span>02 November 2021</span></li>
                                                <li><h5 className="title">Category :</h5><span> GYM, Fitness</span></li>
                                                <li><h5 className="title">Clients :</h5><span>William Dixon</span></li>
                                                <li><h5 className="title">Location :</h5><span>London, NW18JR, UK</span></li>
                                            </ul>
                                        </div>
                                        <div className="project-single-side-btn m-b30">
                                            <h4 className="wt-title m-b20">Brochures</h4>
                                            <p>View our 2021 financial prospectus brochure for an easy to read guide on all of the services offer.</p>
                                            <div className="wt-icon-box-wraper left ">
                                                <NavLink to={"#"} className="btn-block  m-tb5">
                                                    <span className="text-black m-r10"><i className="fa fa-file-pdf-o" /></span>
                                                    <strong className="text-black">Download .PDF</strong>
                                                </NavLink>
                                            </div>
                                            <div className="wt-icon-box-wraper left">
                                                <NavLink to={"#"} className="btn-block  m-tb5">
                                                    <span className="text-black m-r10"><i className="fa fa-file-word-o" /></span>
                                                    <strong className="text-black"> Download .DOC</strong>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Projects /> */}
                </div>
            </>
        );
    };
};

export default RapidPrototyping;