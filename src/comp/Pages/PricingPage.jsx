import React from 'react';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';
import Pricing from '../Sections/Pricing';
import Pricing2 from '../Sections/Pricing2';

class PricingPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                    <div className="page-content">
                        <Banner title="Pricing"/>
                        <Pricing />
                        <Pricing2 />
                    </div>
                <Footer />
            </>
        );
    };
};

export default PricingPage;