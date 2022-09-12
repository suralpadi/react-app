import React from 'react';
import Team2 from '../../Sections/Team2';
import Services2 from '../../Sections/Services2';
import Projects from '../../Sections/Projects';
import Help from '../../Sections/Help';
import MainSlider from '../../Sections/main/MainSlider';
import MainAbout from '../../Sections/main/MainAbout';
import MainClientLogos from '../../Sections/main/MainClientLogos';
import Blogs2 from '../../Sections/Blogs2';
import MainFacts from '../../Sections/main/MainFacts';

class MainHome extends React.Component {
    render() {
        return (
            <>
                    <div className="page-content">
                        <MainSlider />
                        <MainAbout />
                        <Services2 />
                        <MainFacts />
                        {/* <Team2 /> */}
                        {/* <Projects /> */}
                        {/* <Testimonials2 /> */}
                        {/* <Blogs2 /> */}
                        {/* <Help /> */}
                        {/* <MainClientLogos /> */}
                    </div>
            </>
        );
    };
};

export default MainHome;