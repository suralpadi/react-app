import React from 'react';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';
import AllServices from '../Sections/AllServices';
import Help from '../Sections/Help';
import Facts from '../Sections/Facts';
import Testimonials6 from '../Sections/Testimonials6';

class ServicesPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                    <div className="page-content">
                        <Banner title="Services"/>
                        <AllServices />
                        <Help />
                        <Facts />
                        <Testimonials6 />
                    </div>
                <Footer />
            </>
        );
    };
};

export default ServicesPage;