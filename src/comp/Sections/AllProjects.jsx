import React from 'react';
import { NavLink } from 'react-router-dom';

const allProjects = [
    {
        image: require('./../../assets/images/project/1.jpg'),
        title: 'Regulatory Compliance System',
        category: 'Energy'
    },
    {
        image: require('./../../assets/images/project/2.jpg'),
        title: 'Florida Chemical Factories',
        category: 'industry'
    },
    {
        image: require('./../../assets/images/project/3.jpg'),
        title: 'Flyover Construction',
        category: 'Construction'
    },
    {
        image: require('./../../assets/images/project/4.jpg'),
        title: 'Documents Electronics Data',
        category: 'Oil & Gas'
    },
    {
        image: require('./../../assets/images/project/5.jpg'),
        title: 'Automotive Manufactureing',
        category: 'Automobile'
    },
    {
        image: require('./../../assets/images/project/6.jpg'),
        title: 'California Power Point',
        category: 'Industrial '
    },
    {
        image: require('./../../assets/images/project/7.jpg'),
        title: 'Regulatory Compliance System',
        category: 'Energy'
    },
    {
        image: require('./../../assets/images/project/2.jpg'),
        title: 'Florida Chemical Factories',
        category: 'industry'
    },
    {
        image: require('./../../assets/images/project/8.jpg'),
        title: 'Flyover Construction',
        category: 'Construction'
    }
]

class AllProjects extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120 p-b90 projects-outer-full">
                    <div className="container">
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-secondry">
                                <div className="sep-leaf-left" />
                                <div>Projects</div>
                            </div>
                            <h2 className="wt-title">Brilliant Ideas With Excellent Work </h2>
                        </div>
                        <div className="section-content">
                            <div className="project-box-style1-outer no-gutters  row clearfix d-flex justify-content-center flex-wrap m-b30">
                                {allProjects.map((item, index) => (
                                    <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-6" key={index}>
                                        <div className="project-box-style1">
                                            <div className="project-content">
                                                <div className="project-title">
                                                    Energy
                </div>
                                                <h4 className="project-title-large"><NavLink to="/projects-details">{item.title}</NavLink></h4>
                                            </div>
                                            <div className="project-media">
                                                <img src={item.image.default} alt="" />
                                            </div>
                                            <div className="project-view">
                                                <a className="elem pic-long project-view-btn" href={item.image.default} title={item.category} data-lcl-txt={item.title} data-lcl-author="someone" data-lcl-thumb={item.image.default}>
                                                    <i />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default AllProjects;