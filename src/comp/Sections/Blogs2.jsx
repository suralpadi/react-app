import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        image: require('./../../assets/images/blog/latest-2/b1.jpg'),
        title: 'Cargo flow through better supply chain visibility.',
        category: 'Factory',
        date: '13'
    },
    {
        image: require('./../../assets/images/blog/latest-2/b2.jpg'),
        title: 'The future of factories in the coming years',
        category: 'Industry',
        date: '18'
    },
    {
        image: require('./../../assets/images/blog/latest-2/b3.jpg'),
        title: 'The factors that countries create are energy',
        category: 'Energy',
        date: '19'
    }
]

class Blogs2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120  p-b90 bg-white">
                    <div className="container">
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>News And Updates</div>
                            </div>
                            <h2 className="wt-title">Let's Checkout Our
            All Current News.</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="section-content">
                            <div className="row d-flex justify-content-center">
                                {blogs.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <div className="blog-post blog-post-4-outer">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <NavLink to="/blog-details"><img src={item.image.default} alt="" /></NavLink>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-date"><span>{item.date}</span>July</li>
                                                        <li className="post-category">{item.category}</li>
                                                    </ul>
                                                </div>
                                                <div className="wt-post-title ">
                                                    <h4 className="post-title"><NavLink to="/blog-details">{item.title}</NavLink></h4>
                                                </div>
                                                <div className="wt-post-readmore">
                                                    <NavLink to="/blog-details" className="site-button-link black">Read More</NavLink>
                                                </div>
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

export default Blogs2;