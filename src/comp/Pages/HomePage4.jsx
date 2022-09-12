import React from 'react';
import Header4 from './../Layout/Header4';
import Footer4 from './../Layout/Footer4';
import Slider4 from '../Sections/Slider4';
import AboutCompany from '../Sections/AboutCompany';
import About4 from '../Sections/About4';
import Facts4 from '../Sections/Facts4';
import Projects3 from '../Sections/Projects3';
import Testimonials4 from '../Sections/Testimonials4';
import Team4 from '../Sections/Team4';
import Help2 from '../Sections/Help2';

class HomePage4 extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                    <div className="page-content home-four">
                        <Slider4 />
                        <AboutCompany />
                        <About4 />
                        <Facts4 />
                        <Projects3 />
                        <Testimonials4 />
                        <Team4 />
                        <Help2 />
                    </div>
                <Footer4 />
            </>
        );
    };
};

export default HomePage4;