import React from 'react';
import Header5 from './../Layout/Header5';
import Footer5 from './../Layout/Footer5';
import Slider5 from '../Sections/Slider5';
import AboutCompany2 from '../Sections/AboutCompany2';
import Welcome from '../Sections/Welcome';
import Services4 from '../Sections/Services4';
import Facts5 from '../Sections/Facts5';
import Facts6 from '../Sections/Facts6';
import Testimonials5 from '../Sections/Testimonials5';
import ClientLogos2 from '../Sections/ClientLogos2';
import Blogs4 from '../Sections/Blogs4';

class HomePage5 extends React.Component {
    render() {
        return (
            <>
                <Header5 />
                    <div className="page-content home-five">
                        <Slider5 />
                        <AboutCompany2 />
                        <Welcome />
                        <Services4 />
                        <Facts5 />
                        <Facts6 />
                        <Testimonials5 />
                        <ClientLogos2 />
                        <Blogs4 />
                    </div>
                <Footer5 />
            </>
        );
    };
};

export default HomePage5;