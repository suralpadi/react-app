import React from 'react';
import { NavLink } from 'react-router-dom';

const recentPost = [
    {
        image: require('./../../assets/images/blog/recent-blog/pic1.jpg'),
        title: 'Automating The Design to Manufacturing Lifecycle.',
        date: '18 March, 2021'
    },
    {
        image: require('./../../assets/images/blog/recent-blog/pic2.jpg'),
        title: 'Fusce ac tellus ut libero ullamcorper maximus.',
        date: '24 March, 2021'
    },
    {
        image: require('./../../assets/images/blog/recent-blog/pic3.jpg'),
        title: 'In eleifend lobortis tortor, at ornare tellus cursus quis.',
        date: '27 March, 2021'
    }
]

const instaImages = [
    { image: require('./../../assets/images/insta-pic/1.jpg') },
    { image: require('./../../assets/images/insta-pic/2.jpg') },
    { image: require('./../../assets/images/insta-pic/3.jpg') },
    { image: require('./../../assets/images/insta-pic/4.jpg') },
    { image: require('./../../assets/images/insta-pic/5.jpg') },
    { image: require('./../../assets/images/insta-pic/6.jpg') }
]

class BlogSidebar extends React.Component {
    render() {
        return (
            <>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 rightSidebar  m-b30">
                    <aside className="side-bar">
                        <div className="widget widget_team p-a30 bg-white">
                            <div className="text-left m-b30">
                                <h4 className="widget-title">About author</h4>
                            </div>
                            <div className="widget-media m-b30">
                                <img src={require("./../../assets/images/team/pic1.jpg").default} alt="" />
                            </div>
                            <div className="team-detail  text-center">
                                <h4 className="m-t0">Rosalina D. Willaimson</h4>
                                <p>We are the dolor sit ametLorem Ipsum Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin.
                </p>
                                <div className="team-social-center">
                                    <ul>
                                        <li><NavLink to={""}><i className="fa fa-facebook" /></NavLink></li>
                                        <li><NavLink to={""}><i className="fa fa-twitter" /></NavLink></li>
                                        <li><NavLink to={""}><i className="fa fa-linkedin" /></NavLink></li>
                                        <li><NavLink to={""}><i className="fa fa-pinterest" /></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* SEARCH */}
                        <div className="widget search-bx">
                            <div className="text-left m-b30">
                                <h4 className="widget-title">Search</h4>
                            </div>
                            <form role="search" method="post">
                                <div className="input-group">
                                    <input name="news-letter" type="text" className="form-control" placeholder="Write your text" />
                                    <span className="input-group-btn">
                                        <button type="submit" className="btn"><i className="fa fa-search" /></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        {/* RECENT POSTS */}
                        <div className="widget recent-posts-entry p-a20">
                            <div className="text-left m-b30">
                                <h4 className="widget-title">Recent Posts</h4>
                            </div>
                            <div className="section-content">
                                <div className="widget-post-bx">
                                    {recentPost.map((item, index) => (
                                        <div className="widget-post clearfix" key={index}>
                                            <div className="wt-post-media">
                                                <img src={item.image.default} alt="" />
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-header">
                                                    <span className="post-date">{item.date}</span>
                                                    <span className="post-title"> <NavLink to="/blog-details">{item.title}</NavLink></span>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* INSTA POSTS */}
                        <div className="widget widget-insta-post">
                            <div className="text-left m-b30">
                                <h4 className="widget-title">Instagram</h4>
                            </div>
                            <ul>
                                {instaImages.map((item, index) => (
                                    <li key={index}><NavLink to="/blog-details"><img src={item.image.default} alt="img" /></NavLink></li>
                                ))}
                            </ul>
                        </div>
                        {/* CATEGORY */}
                        <div className="widget widget_services p-a20">
                            <div className="text-left m-b30">
                                <h4 className="widget-title">Categories</h4>
                            </div>
                            <ul>
                                <li><NavLink to={""}>Oil, Gas &amp; Coal</NavLink><span className="badge">(28)</span></li>
                                <li><NavLink to={""}>Mechanical Engineering</NavLink><span className="badge">(28)</span></li>
                                <li><NavLink to={""}>Chemical Research</NavLink><span className="badge">(05)</span></li>
                                <li><NavLink to={""}>Construction Industry</NavLink><span className="badge">(24)</span></li>
                                <li><NavLink to={""}>Electrical Engineering</NavLink><span className="badge">(15)</span></li>
                                <li><NavLink to={""}>Petroleum Refinery</NavLink><span className="badge">(20)</span></li>
                            </ul>
                        </div>
                        {/* TAGS */}
                        <div className="widget widget_tag_cloud p-a20">
                            <div className="text-left m-b30">
                                <h4 className="widget-title">Tags</h4>
                            </div>
                            <div className="tagcloud">
                                <NavLink to={""}>Build </NavLink>
                                <NavLink to={""}>Factory</NavLink>
                                <NavLink to={""}>Engineering </NavLink>
                                <NavLink to={""}>Repairing</NavLink>
                                <NavLink to={""}>Industry</NavLink>
                                <NavLink to={""}>Materials</NavLink>
                                <NavLink to={""}>Mechanical</NavLink>
                                <NavLink to={""}>Buildings</NavLink>
                                <NavLink to={""}>Construction</NavLink>
                            </div>
                        </div>
                    </aside>
                </div>
            </>
        );
    }
};

export default BlogSidebar;