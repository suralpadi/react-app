import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
        image: require('./../../assets/images/project/8.jpg'),
        title: 'Flyover Construction',
        category: 'Construction'
    }
]

class ProjectCarousel2 extends React.Component {

    render() {

        const options = {
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 2,
                },
                1024: {
                    items: 3,
                }

            }
        };

        return (
            <>
                <div className="section-full  p-t120 p-b90 site-bg-gray-light">
                    <div className="section-content">
                        <div className="container">
                            <OwlCarousel className="owl-carousel owl-carousel-filter owl-btn-bottom-center project-new-1-outer m-b30 owl-loaded owl-drag" {...options}>
                                {allProjects.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="project-box-style1">
                                            <div className="project-content">
                                                <div className="project-title">
                                                    {item.category}
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
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ProjectCarousel2;