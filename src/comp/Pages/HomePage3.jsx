import React from 'react';
import Header3 from './../Layout/Header3';
import Footer3 from './../Layout/Footer3';
import Slider3 from '../Sections/Slider3';
import About3 from '../Sections/About3';
import Services3 from '../Sections/Services3';
import Facts3 from '../Sections/Facts3';
import Projects2 from '../Sections/Projects2';
import Team3 from '../Sections/Team3';
import Blogs3 from '../Sections/Blogs3';
import Testimonials3 from '../Sections/Testimonials3';

class HomePage3 extends React.Component {
    
    render() {
        return (
            <>
                <Header3 />
                    <div className="page-content home-three">
                        <Slider3 />
                        <About3 />
                        <Services3 />
                        <Facts3 />
                        <Projects2 />
                        <Team3 />
                        <Blogs3 />
                        <Testimonials3 />
                    </div>
                <Footer3 />
            </>
        );
    };
};

export default HomePage3;