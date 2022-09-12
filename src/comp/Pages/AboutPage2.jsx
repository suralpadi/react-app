import React from 'react';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';
import About2 from '../Sections/About2';
import Team5 from '../Sections/Team5';
import Blogs2 from '../Sections/Blogs2';
import Vision from '../Sections/Vision';

class AboutPage2 extends React.Component {
    render() {
        return (
            <>
                <Header />
                    <div className="page-content">
                    <Banner title="About Us 2"/>
                        <About2 />
                        <Team5 />
                        <Blogs2 />
                        <Vision />
                    </div>
                <Footer />
            </>
        );
    };
};

export default AboutPage2;