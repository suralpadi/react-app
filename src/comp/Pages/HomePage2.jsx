import React from 'react';
import Footer2 from './../Layout/Footer2';
import Slider2 from '../Sections/Slider2';
import About2 from '../Sections/About2';
import Facts2 from '../Sections/Facts2';
import Team2 from '../Sections/Team2';
import Services2 from '../Sections/Services2';
import Projects from '../Sections/Projects';
import Testimonials2 from '../Sections/Testimonials2';
import Blogs2 from '../Sections/Blogs2';
import Help from '../Sections/Help';
import MainHeader from '../Layout/Main/MainHeader';

class HomePage2 extends React.Component {
    render() {
        return (
            <>
                <MainHeader />
                    <div className="page-content">
                        <Slider2 />
                        <About2 />
                        <Services2 />
                        <Facts2 />
                        <Team2 />
                        {/* <Projects /> */}
                        <Testimonials2 />
                        <Blogs2 />
                        <Help />
                    </div>
                <Footer2 />
            </>
        );
    };
};

export default HomePage2;