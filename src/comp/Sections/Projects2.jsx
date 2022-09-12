import React from 'react';
import { NavLink } from 'react-router-dom';

const projects = [
    {
        image: require('./../../assets/images/agriculture/project/1.jpg'),
        title: 'Organic solutions',
    },
    {
        image: require('./../../assets/images/agriculture/project/2.jpg'),
        title: 'Harvest Innovation',
    },
    {
        image: require('./../../assets/images/agriculture/project/3.jpg'),
        title: 'Agriculture Farming',
    },
    {
        image: require('./../../assets/images/agriculture/project/4.jpg'),
        title: 'Garden Supplies',
    },
    {
        image: require('./../../assets/images/agriculture/project/5.jpg'),
        title: 'Natural Vegetable',
    },
    {
        image: require('./../../assets/images/agriculture/project/6.jpg'),
        title: 'Ecological Farming',
    },
    {
        image: require('./../../assets/images/agriculture/project/7.jpg'),
        title: 'Fresh Rice',
    },
    {
        image: require('./../../assets/images/agriculture/project/8.jpg'),
        title: 'Food Health Check',
    }
]

class Projects2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120 p-b90 projects-outer-full">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-secondry">
                                <div className="sep-leaf-left" />
                                <div>Projects</div>
                            </div>
                            <h2 className="wt-title">Brilliant Ideas With Excellent Work </h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content">
                            <div className="project-box-style1-outer row clearfix d-flex justify-content-center flex-wrap m-b30">
                                {projects.map((item, index) => (
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b30" key={index}>
                                        <div className="project-box-style1">
                                            <div className="project-content">
                                                <h4 className="project-title-large"><NavLink to="/project-details">{item.title}</NavLink></h4>
                                            </div>
                                            <div className="project-media">
                                                <img src={item.image.default} alt="" />
                                            </div>
                                            <div className="project-view">
                                                <a className="elem pic-long project-view-btn" href={item.image.default} title="Energy" data-lcl-txt="Regulatory Compliance System" data-lcl-author="someone" data-lcl-thumb={item.image.default}>
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

export default Projects2;