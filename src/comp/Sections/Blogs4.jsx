import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        image: require('./../../assets/images/transport/blog/thum1.jpg'),
        title: 'Importers achieve cost savings through the First Sale rule! dolar sit amet',
        category: 'Factory',
        date: '20 Jan 2021'
    },
    {
        image: require('./../../assets/images/transport/blog/thum2.jpg'),
        title: 'Importance of specialized focus in Projects, Oil & Gas Logistics? dolar sit amet',
        category: 'Industry',
        date: '18 Jan 2021'
    }
]

class Blogs4 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120 p-b90 bg-white">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Blogs</div>
                            </div>
                            <h2>Our Latest News</h2>
                        </div>
                        {/* TITLE END*/}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                {blogs.map((item, index) => (
                                    <div className="col-md-6 col-sm-6 m-b30" key={index}>
                                        <div className="blog-post latest-blog-4">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <NavLink to="/blog-details"><img src={item.image.default} alt="" /></NavLink>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="post-date"> <strong>{item.date} </strong></div>
                                                <div className="wt-post-meta">
                                                    <ul className="clearfix">
                                                        <li className="post-author">
                                                            <div className="post-author-pic">
                                                                <span><img src={item.image.default} alt="" /></span>
                                                                <span><strong> By</strong> <NavLink to="/blog-details">Loretta Shelton</NavLink></span>
                                                            </div>
                                                        </li>
                                                        <li className="post-comment"><i className="fa fa fa-comments site-text-primary" /> <NavLink to="/blog-details">10 Comment</NavLink> </li>
                                                    </ul>
                                                </div>
                                                <div className="wt-post-title">
                                                    <h4 className="post-title m-b20"><NavLink to="/blog-details">{item.title}</NavLink></h4>
                                                </div>
                                                <div className="readmore-line">
                                                    <NavLink to="/blog-details" className="site-button-link site-text-primary">Read More</NavLink>
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

export default Blogs4;