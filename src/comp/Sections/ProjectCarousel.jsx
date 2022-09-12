import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const allProjects = [
    {
        image: require('./../../assets/images/project-4/m1.jpg'),
        title: 'Regulatory Compliance System',
        category: 'Energy'
    },
    {
        image: require('./../../assets/images/project-4/m2.jpg'),
        title: 'Florida Chemical Factories',
        category: 'industry'
    },
    {
        image: require('./../../assets/images/project-4/m3.jpg'),
        title: 'Documents Electronics Data',
        category: 'Oil & Gas'
    },
    {
        image: require('./../../assets/images/project-4/m4.jpg'),
        title: 'Flyover Construction',
        category: 'Construction'
    }
]

class ProjectCarousel extends React.Component {
    render() {

        const options = {
            loop: true,
            autoplay: true,
            nav: false,
            dots: true,
            margin: 30,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                }
            }
        };

        return (
            <>
                <div className="section-full p-t120 p-b90 bg-gray">
                    <div className="container">
                        <div className="section-content">
                            <OwlCarousel className="owl-carousel project-slider2 dark-dotts-line center m-b30 owl-loaded owl-drag" {...options}>
                                {allProjects.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="project-img-effect-1">
                                            <img src={item.image.default} alt="" />
                                            <div className="wt-info  bg-white p-t20">
                                                <div className="project-title">
                                                    {item.category}
                                                </div>
                                                <h4 className="project-title-large"><NavLink to="/projects-details">{item.title}</NavLink></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.</p>
                                                <NavLink to="/projects-details" className="site-button-link">Read More</NavLink>
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

export default ProjectCarousel;