import React from 'react';
import Banner from '../../Sections/Banner';
import Testimonials from '../../Sections/Testimonials';
import BuildFuture from '../../Sections/BuildFuture';
import MainAbout from '../../Sections/main/MainAbout';
import MainFacts from '../../Sections/main/MainFacts';
import AboutBanner from '../../../assets/images/banner/AboutUsBanner.jpg';


class AboutPage extends React.Component {
    render() {
        return (
            <>
                    <div className="page-content">
                    <Banner BannerBg={AboutBanner}  title="About Us"/>
                        <MainAbout />
                        <MainFacts />
                        {/* <Testimonials /> */}
                        
                        {/* <BuildFuture /> */}
                    </div>
            </>
        );
    };
};

export default AboutPage;