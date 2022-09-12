import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../../../Sections/Banner';
import { Link } from 'react-scroll'
import { ServicesBanner } from '../../../../assets/images';

class MetrologySolutions extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <Banner BannerBg={ServicesBanner} title="Metrology Solutions" />
                    <div className="section-full p-t120 p-b90 bg-white">
                        <div className="section-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-12 rightSidebar">
                                        <div className="all_services m-b30">
                                            <ul>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="ReverseEngineering">Reverse Engineering - Scan to CAD</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="NonContact">Non-Contact 3D Inspection – Scan to CAD Inspection</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="Contact3D">Contact 3D Inspection – Probing Inspection</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="LargeParts">Large Parts Inspection</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="AsBuilt3DDocumentation">As-Built 3D Documentation</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="BuildingInformation">Building Information Modeling</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="VirtualSimulation">Virtual Simulation</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="Alignment">Alignment</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="MachineCalibration">Machine Calibration</Link></li>
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
                                    </div>
                                    <div className="col-lg-9 col-md-12">
                                        <div className="section-content service-full-info">
                                            <div className="services-etc m-b30">
                                                <div className="text-left">
                                                    <h4 className="wt-title m-b20 site-text-primary">Metrology Solutions</h4>
                                                    <p><strong>Metrology</strong> is the department that specializes in measuring the exact dimension of a product. It is very crucial to know a product’s exact dimension. Only then companies will be able to manufacture even a spare part for that specific product. Metrology also advocates the purpose of each high-precision tool. For example, a tool used to measure the dimension of an Engine block may not be able to measure exact geometry of an uneven object.</p>
                                                </div>
                                                <div className="wt-media m-b30">
                                                    <img src={require('../../../../assets/images/products/metrology-1.jpg').default} alt="" />
                                                </div>
                                                <p>These high-precision tools can get the job done within an eye blink and comparatively the cost is also significantly lesser than traditional methods.</p>
                                            </div>
                                            <div className="service-provide" id="ReverseEngineering">
                                                <h4 className="wt-title m-b20 site-text-primary">Reverse Engineering - Scan to CAD</h4>
                                                <div className="row">
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/Reverse-Engineering-1.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/Reverse-Engineering-2.jpg').default} alt="" /></div>
                                                </div>
                                                <p>
                                                    <ul className="list-angle-right">
                                                        <li>HD LASER Scanning to provide HD quality Point Cloud data/ Scan data</li>
                                                        <li>Create High definition quality 3D Surface CAD models / Solid CAD mod</li>
                                                        <li>Process scan data received from customers to develop best quality 3D / 2D Models</li>
                                                        <li>Output formats: iges, stp, dxf, stl etc. (as per customer requirement)</li>
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
                                            {/* service start */}
                                            <div className="service-provide" id="NonContact">
                                                <h4 className="wt-title m-b20 site-text-primary">Non-Contact 3D Inspection –
                                                    Scan to CAD Inspection</h4>
                                                <div className="row">
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/Contact-3D-Inspection-1.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/Contact-3D-Inspection-2.jpg').default} alt="" /></div>
                                                </div>
                                                <p>
                                                    <ul className="list-angle-right">
                                                        <li>Non-Contact / CAD-Based Inspection</li>
                                                        <li>Identify deviations of physical objects from CAD data by HD scanning and comparing to CAD </li>
                                                        <li>Process scan data received from customers to perform Scan to CAD 3D Inspection</li>
                                                        <li>Create Professional Inspection Reports</li></ul>

                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <h4>Deliverables</h4>
                                                        <ul className="list-angle-right">
                                                            <li>3D Inspection Reports (pdf,word, xls)</li>
                                                            <li>Color Maps</li>
                                                            <li>Customizable Reports(As per customer requirement)</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="Contact3D">
                                                <h4 className="wt-title m-b20 site-text-primary">Contact 3D Inspection – Probing Inspection</h4>
                                                <div className="row">
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsProbingInspection-1.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsProbingInspection-2.jpg').default} alt="" /></div>
                                                </div>
                                                <p>
                                                    <ul className="list-angle-right">
                                                        <li>Contact Inspection by Probing</li>
                                                        <li>Use probed data and identify deviation
                                                            between nominal and Actual measurement Values</li>
                                                        <li> Process probed data received from
                                                            customers
                                                            and perform
                                                            Dimensional
                                                            measurements, GD&T etc. as per customer
                                                            requirement</li>
                                                        <li>Generate Professional Inspection Reports</li></ul>

                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <h4>Deliverables</h4>
                                                        <ul className="list-angle-right">
                                                            <li>3D Inspection Reports</li>
                                                            <li>GD&T Reports</li>
                                                            <li>Customizable Reports (As
                                                                per customer requirement)</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="LargeParts">
                                                <h4 className="wt-title m-b20 site-text-primary">Large Parts Inspection</h4>
                                                <div className="row">
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsLargeParts-1.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsLargeParts-2.jpg').default} alt="" /></div>
                                                </div>
                                                <p>
                                                    <ul className="list-angle-right">
                                                        <li>Capture measurements of large parts by
                                                            Probing / Scanning</li>
                                                        <li>Use probed/scanned data and identify
                                                            deviation between nominal and Actual
                                                            measurement Values</li>
                                                        <li>Process probed data received from
                                                            customers and perform
                                                            Dimensional
                                                            measurements,
                                                            GD&T
                                                            etc. as per
                                                            customer requirement</li>
                                                        <li>Generate Professional Inspection Reports</li></ul>

                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <h4>Deliverables</h4>
                                                        <ul className="list-angle-right">
                                                            <li>3D Inspection Reports</li>
                                                            <li>GD&T Reports</li>
                                                            <li>Customizable Reports (As
                                                                per customer requirement)</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="AsBuilt3DDocumentation">
                                                <h4 className="wt-title m-b20 site-text-primary">As-Built 3D Documentation</h4>
                                                <div className="row">
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/Built-3D-Documentation-1.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/Built-3D-Documentation-2.jpg').default} alt="" /></div>
                                                </div>
                                                <p>
                                                    <ul className="list-angle-right">
                                                        <li>Digitize and document as-built conditions
                                                            in high definition with laser scanning
                                                            technology</li>
                                                        <li>Scanning / 3D Documentation of large-
                                                            scale areas like

                                                            <p>
                                                                <ul>
                                                                    <li>Oil Rigs</li>
                                                                    <li>Construction / Transportation sites</li>
                                                                    <li>Historical Places / Museums</li>
                                                                    <li>Landscape</li>
                                                                </ul></p></li>
                                                        <li>Output formats: wrl, xyz, dxf etc. (as per
                                                            customer requirement)</li>
                                                    </ul>

                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <h4>Deliverables</h4>
                                                        <ul className="list-angle-right">
                                                            <li>Architectural Models</li>
                                                            <li>BIM / CIM Models, GA Drawings</li>
                                                            <li>Point Cloud data / Scan data</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="BuildingInformation">
                                                <h4 className="wt-title m-b20 site-text-primary">Building Information Modeling</h4>
                                                <div className="row">
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsBuilding-1.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsBuilding-2.jpg').default} alt="" /></div>
                                                </div>
                                                <p>
                                                    <ul className="list-angle-right">
                                                        <li>Capture 3D data for building / Construction
                                                            design at every point of construction
                                                            with BIM / CIM solutions</li>
                                                        <li>Process scan data received from
                                                            customers to develop
                                                            best
                                                            quality
                                                            Building
                                                            /
                                                            Architecture Models /
                                                            Customized models</li>
                                                        <li>Output formats: iges, stp, dxf etc (as per
                                                            customer requirement)</li>
                                                    </ul>

                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <h4>Deliverables</h4>
                                                        <ul className="list-angle-right">
                                                            <li>Architectural Models</li>
                                                            <li>BIM / CIM Models, GA Drawings</li>
                                                            <li>Point Cloud data / Scan data</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="VirtualSimulation">
                                                <h4 className="wt-title m-b20 site-text-primary">Virtual Simulation</h4>
                                                <div className="row">
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsVirtualSimulation-1.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsVirtualSimulation-2.jpg').default} alt="" /></div>
                                                </div>
                                                <p>
                                                    <ul className="list-angle-right">
                                                        <li>Virtualize entire sets, characters,
                                                            objects to simulate Real life experience</li>
                                                        <li>Create Walk through visuals</li>
                                                        <li>Process data
                                                            received from
                                                            customers
                                                            and develop
                                                            Walkthrough Visuals / Animations etc.</li>
                                                        <li>Animation / Visual effects etc.</li>
                                                    </ul>

                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <h4>Deliverables</h4>
                                                        <ul className="list-angle-right">
                                                            <li>Animation Videos</li>
                                                            <li>Simulation Videos</li>
                                                            <li>Walk through Videos</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="Alignment">
                                                <h4 className="wt-title m-b20 site-text-primary">Alignment</h4>
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-6 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsAlignment-1.jpg').default} alt="" /></div>
                                                    {/* <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/services/s/2.jpg').default} alt="" /></div> */}
                                                </div>
                                                <p>
                                                    <ul className="list-angle-right">
                                                        <li>Perform Alignments of machines, assemblies etc. By
                                                            3D measurement technology / LASER Technology</li>
                                                        <li>Increase machine performance and reduce downtime caused by misalignment</li>
                                                        <li>Generate Professional Alignment Reports</li>
                                                    </ul>

                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <h4>Deliverables</h4>
                                                        <ul className="list-angle-right">
                                                            <li>Alignment Reports</li>
                                                            <li>Customizable Reports (As per customer requirement</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="MachineCalibration">
                                                <h4 className="wt-title m-b20 site-text-primary">Machine Calibration</h4>
                                                <div className="row">
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/MachineCalibration-1.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/metrology_solution/MachineCalibration-2.jpg').default} alt="" /></div>
                                                </div>
                                                <p>
                                                    <ul className="list-angle-right">
                                                        <li>Ensure machines are calibrated and operating at optimal performance</li>
                                                        <li>Increase machine performance and reduce downtime caused by calibration errors</li>
                                                        <li>Generate Professional calibration Reports</li>
                                                    </ul>

                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <h4>Deliverables</h4>
                                                        <ul className="list-angle-right">
                                                            <li>Calibration Reports</li>
                                                            <li>Customizable Reports (As per customer requirement)</li>
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

export default MetrologySolutions;