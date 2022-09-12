import React from 'react';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Slider from './../Sections/Slider';
import About from './../Sections/About';
import Facts from './../Sections/Facts';
import Team from './../Sections/Team';
import Services from './../Sections/Services';
import BuildFuture from './../Sections/BuildFuture';
import Testimonials from './../Sections/Testimonials';
import Blogs from './../Sections/Blogs';
import MainClientLogos from '../Sections/main/MainClientLogos';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                    <div className="page-content">
                        <Slider />
                        <About />
                        <Facts />
                        <Team />
                        <Services />
                        <BuildFuture />
                        <Testimonials />
                        <Blogs />
                    </div>
                <Footer />
            </>
        );
    };
};

export default Home;