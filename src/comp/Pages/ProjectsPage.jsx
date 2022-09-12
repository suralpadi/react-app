import React from 'react';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';
import AllProjects from '../Sections/AllProjects';

class ProjectsPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                    <div className="page-content">
                        <Banner title="Project 1"/>
                        <AllProjects />
                    </div>
                <Footer />
            </>
        );
    };
};

export default ProjectsPage;