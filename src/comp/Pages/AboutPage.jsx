import React from 'react';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';
import About from '../Sections/About';
import Facts2 from '../Sections/Facts2';
import Testimonials from '../Sections/Testimonials';
import BuildFuture from '../Sections/BuildFuture';

class AboutPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                    <div className="page-content">
                    <Banner title="About Us"/>
                        <About />
                        <Facts2 />
                        <Testimonials />
                        <BuildFuture />
                    </div>
                <Footer />
            </>
        );
    };
};

export default AboutPage;