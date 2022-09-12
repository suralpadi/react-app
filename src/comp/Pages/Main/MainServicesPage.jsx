import React from 'react';
import Banner from '../../Sections/Banner';
import AllServices from '../../Sections/AllServices';
import Help from '../../Sections/Help';
import Facts from '../../Sections/Facts';
import Testimonials6 from '../../Sections/Testimonials6';

class MainServicesPage extends React.Component {
    render() {
        return (
            <>
                    <div className="page-content">
                        <Banner title="Services"/>
                        <AllServices />
                        <Help />
                        <Facts />
                        <Testimonials6 />
                    </div>
            </>
        );
    };
};

export default MainServicesPage;