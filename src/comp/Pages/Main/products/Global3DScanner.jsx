import React from 'react';
import Banner from '../../../Sections/Banner';
import OurProductBanner from '../../../../assets/images/banner/AboutUsBanner.jpg';

class Global3DScanner extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <Banner BannerBg={OurProductBanner} title={"Global 3D Scanner"} />
                    <div className="section-full p-t120 p-b120 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="project-single">
                                            <h4 className="wt-tilte site-text-primary">Global 3D Scanner</h4>
                                            <div className="row project-single-img-column m-b30 d-flex justify-content-center align-items-center">
                                                <div className="col-md-6 col-lg-6"><img src={require('../../../../assets/images/products/AXE-B11-3D-Scanner.jpg').default} alt="" /></div>
                                                <div className="col-md-6 col-lg-6"><img src={require('../../../../assets/images/products/AXE-B17-3D-Scanner.jpg').default} alt="" /></div>
                                            </div>
                                            <div className="wt-info  bg-white">
                                                <p>Global 3D Scanner is designed for 3D measuring massive objects, global 3D scanners comes with photogrammetry system to deliver metrology-grade 3D solutions without the help of other peripheral devices. When conducting a 3D inspection of a large-scale project, scanning area and volumetric accuracy are inevitable challenges, this type of 3D solution, however, benefits from innovative built-in photogrammetry system technology to provide ultra-wide scanning area and collects data precisely, improving the efficiency of high-quality 3D modeling and accelerates 3D digitizing process.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {/* <Projects /> */}
                </div>
            </>
        );
    };
};

export default Global3DScanner;