import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../../../Sections/Banner';
import OurProductBanner from '../../../../assets/images/banner/AboutUsBanner.jpg';

const blogs = [
    {
        image: require('../../../../assets/images/products/PortableCMMAccessories-1.png'),
        title: 'Laser Tracker SMRs & Laser Tracker Ball Probes',
    },
    {
        image: require('../../../../assets/images/products/Probes-FAROArm.png'),
        title: 'Probes – FARO Arm',
    },
    {
        image: require('../../../../assets/images/products/CMM-Fixture-Plates-Kits.png'),
        title: 'CMM Fixture Plates andKits',
    },
    {
        image: require('../../../../assets/images/products/Rolling-Metrology-Stands.png'),
        title: 'Rolling Metrology Stands, Portable Metrology Tripods, Magnetic Mounts, andRolling Granite Carts',
    },
    {
        image: require('../../../../assets/images/products/Laser-Tracker-Tooling.png'),
        title: 'Laser Tracker Tooling & Accessories',
    }
]
class CMM extends React.Component {
    
    render() {
        return (
            <>
                <div className="page-content">
                    <Banner BannerBg={OurProductBanner} title={"CMM - Bridge type"} />
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
                                                <p>High resolution optical lines (0.1 micron) with carrier sliding system with dynamic signalprocessing and Highly reactive structure to environmental temperature changes</p>
                                                <h5 className="wt-tilte site-text-primary">Software supports:</h5>
                                                <ul className="arrow-list-1">
                                                    <li>*SP25</li>
                                                    <li>*SP80</li>
                                                    <li>*PH20</li>
                                                    <li>TP20</li>
                                                    <li>TP200</li>
                                                    <li>TP2</li>
                                                    <li>TP6</li>
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
                                    <div className="col-lg-12">
                                        <div className="project-single">
                                            <div className="project-single-media m-b30">
                                                <h4 className="wt-tilte site-text-primary">Portable CMM Accessories</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="row d-flex justify-content-center">
                                    {blogs.map((item, index) => (
                                        <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                            {/*Block one*/}
                                            <div className="blog-post blog-post-4-outer">
                                                <div className="wt-post-media wt-img-effect zoom-slow">
                                                   <img src={item.image.default} alt="" className="product-img" />
                                                </div>
                                                <div className="wt-post-info">
                                                    <div className="wt-post-title ">
                                                        <h5 className="post-title">{item.title}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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

export default CMM;