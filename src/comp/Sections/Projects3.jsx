import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Architecture", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Construction", filter: ".cat-3" },
    { label: "Painting", filter: ".cat-4" },
    { label: "Building", filter: ".cat-5" },
];

const projects = [
    {
        image: require('./../../assets/images/construction/project2/1.jpg'),
        title: 'Mechanical engineering',
        category: 'Energy',
        filter: 'cat-1'
    },
    {
        image: require('./../../assets/images/construction/project3/m2.jpg'),
        title: 'Oxim Energy Power INC',
        category: 'Energy',
        filter: 'cat-2'
    },
    {
        image: require('./../../assets/images/construction/project2/2.jpg'),
        title: 'Flyover Construction',
        category: 'Energy',
        filter: 'cat-3'
    },
    {
        image: require('./../../assets/images/construction/project2/3.jpg'),
        title: 'Oil & Gas Filtering',
        category: 'Industry',
        filter: 'cat-4'
    },
    {
        image: require('./../../assets/images/construction/project3/m3.jpg'),
        title: 'Florida Chemicals Factory',
        category: 'Construction',
        filter: 'cat-5'
    },
    {
        image: require('./../../assets/images/construction/project3/m4.jpg'),
        title: 'Chemical Research Center',
        category: 'Industrial',
        filter: 'cat-2'
    },
    {
        image: require('./../../assets/images/construction/project2/4.jpg'),
        title: 'Machinary Processing',
        category: 'Planing',
        filter: 'cat-3'
    },
    {
        image: require('./../../assets/images/construction/project2/5.jpg'),
        title: 'Welding Processing',
        category: 'Repair',
        filter: 'cat-4'
    },
    {
        image: require('./../../assets/images/construction/project2/6.jpg'),
        title: 'Villy Manufacturing Inc',
        category: 'Engineering',
        filter: 'cat-1'
    }
]

class Projects3 extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };

    render() {
        return (
            <>
                <div className="section-full p-t120 p-b90 bg-white">
                    <div className="container">
                        {/* PAGINATION START */}
                        <div className="filter-wrap">
                            <ul className="masonry-filter">
                                <li className="active"><NavLink to={"#"} data-filter="*">All Categories</NavLink></li>
                                {filters.map((item, index) => (
                                    <li key={index}><NavLink to={"#"} data-filter={item.filter}>{item.label}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                        {/* PAGINATION END */}
                        {/* PROJECT CONTENT START */}
                        <div className="masonry-wrap row clearfix d-flex justify-content-center flex-wrap">
                            {projects.map((item, index) => (
                                <div key={index} className={`${item.filter} masonry-item col-xl-4 col-lg-4 col-md-6 m-b30`}>
                                    <div className="project-outer2">
                                        <div className="project-style-2">
                                            <div className="project-media">
                                                <img src={item.image.default} alt="" />
                                            </div>
                                            <div className="wt-info">
                                                <NavLink to="/projects-details"><i className="fa fa-link" /></NavLink>
                                                <a className="elem pic-long" href={item.image.default} title={item.category} data-lcl-txt="Mechanical engineering" data-lcl-author="someone" data-lcl-thumb={item.image.default}>
                                                    <i className="fa fa-expand" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="project-content">
                                            <span className="project-category">{item.category}</span>
                                            <h4 className="wt-title"><NavLink to="/projects-details">{item.title}</NavLink></h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* PROJECT CONTENT END */}
                    </div>
                </div>
            </>
        );
    };
};

export default Projects3;