import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';
import AllProjects2 from '../Sections/AllProjects2';

class ProjectsPage2 extends React.Component {
    render() {
        return (
            <>
                <Header />
                    <div className="page-content">
                        <Banner title="Project 2"/>
                        <AllProjects2 />
                    </div>
                <Footer />
            </>
        );
    };
};

export default ProjectsPage2;