import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';
import ProjectCarousel from '../Sections/ProjectCarousel';
import ProjectCarousel2 from '../Sections/ProjectCarousel2';

class ProjectsPage3 extends React.Component {
    render() {
        return (
            <>
                <Header />
                    <div className="page-content">
                        <Banner title="Project Carousels"/>
                        <ProjectCarousel />
                        <ProjectCarousel2 />
                    </div>
                <Footer />
            </>
        );
    };
};

export default ProjectsPage3;